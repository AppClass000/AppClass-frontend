import React,{ useState,useEffect } from "react";
import Style from "./UserProfile.module.css";
import { ProfileData } from "../../types/type";
import { db,storage } from "../Profile/Firebase"
import { getProfileUserID } from "../../services/api";
import { doc,getDoc } from "firebase/firestore";
import { ref,uploadBytes,getDownloadURL } from "firebase/storage";
import { useUserData } from "../../contexts/UserDataContext";

interface ModalProps {
    onClose:() => void;
    isOpen:boolean;
}

const UserProfile:React.FC<ModalProps> = ({onClose,isOpen}) => {

    const { profile,setProfile } = useUserData();

    const [image,setImage] = useState<File | null>(null);
    const [userID,setUserID] = useState("");


    useEffect(() => {
        const fetchData = async () => {  
            const response = await getProfileUserID<{userid:string}>();
            if (response.userid) {
                setUserID(response.userid)
                const userDoc = await getDoc(doc(db,"users",response.userid))
                if (userDoc.exists()) {
                    setProfile(userDoc.data() as ProfileData);
                } else {
                    console.error("userID does not exist in Firestore");
                }
                
            };
            console.error("error in getProfileUserID")
        };

        fetchData();
    },[])

    const changeHandle =(e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile({...profile, [e.target.name]:e.target.value})

    };

    const fileSetImageHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        };
    };

    const uploadImage = async () => {
        if (!image) return ;
        try {
            const storageRef = ref(storage,`avatar/${userID}/${image.name}`);
            await uploadBytes(storageRef,image);
            const url = await getDownloadURL(storageRef)
            setProfile({...profile,avatar:url});
    } catch (error) {
        console.error("error in uploadImage:",error);};
    };

    if (!isOpen) {
        return null;
    };

    return (
        <div className={Style.profileModalOverLay} onClick={onClose}>
            <div className={Style.cardContainer} onClick={(e) => e.stopPropagation()}>
                <button className={Style.closeButton} onClick={onClose}>&times;</button>
                <div className={Style.card}>
                    <div className={Style.profileImageContainer}>
                        <img 
                            className={Style.profileImage} 
                            src={profile.avatar || "https://via.placeholder.com/80"}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={fileSetImageHandle}
                        />
                    </div>
                    <button className={Style.imageUploadButton} onClick={uploadImage}>
                        決定
                    </button>

                    <div className={Style.inputGroup}>
                        <label>名前</label>
                        <input 
                            type="text"
                            name="name"
                            value={profile.name}
                            onChange={changeHandle}
                        />
                    </div>

                    <div className={Style.inputGroup}>
                        <label>メールアドレス</label>
                        <input 
                            type="text"
                            name="email"
                            value={profile.email}
                            onChange={changeHandle}
                        />
                    </div>
                </div>
            </div>
        </div>
    );


};

export default UserProfile;

