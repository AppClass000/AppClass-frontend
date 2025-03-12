import React,{ useState } from "react";
import  Draggable from "react-draggable";
import Style from "./UserProfile.module.css";
import { profileData } from "../../types/type";
import axios from "axios";


const UserProfile:React.FC = () => {

    const [profile,setProfile] = useState<profileData>({
        name:"",
        email:"",
        avatar:"",
    })

    const changeHandle =(e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile({...profile, [e.target.name]:e.target.value})

    }

    const saveProfile = () => {

    }

    return(
        <Draggable>
            <div className={Style.cardContainer}>
                <div className={Style.card}>
                    <div className={Style.profileimageContainer}>
                        <img 
                        className={Style.profileimage} 
                        src={profile.avatar || "https://via.placeholder.com/80"}
                        alt="avatar"  
                        />
                        <input
                        type="text"
                        name="avatar"
                        placeholder="画像を選択"
                        value={profile.avatar}
                        onChange={changeHandle} />
                    </div>
                    <div className={Style.userName}>
                        <label>名前を入力</label>
                        <input 
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={changeHandle} />
                    </div>
                    <div className={Style.userEmail}>
                    <label>メールアドレスを入力</label>
                        <input 
                        type="text"
                        name="email"
                        value={profile.email}
                        onChange={changeHandle} />
                    </div>
                </div>
                <button  >設定を保存</button>
            </div>
        </Draggable>
    )

};

export default UserProfile;