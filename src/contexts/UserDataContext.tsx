import { useState, createContext,useContext, ReactNode} from 'react';
import { ProfileData } from '../types/type';

interface UserDataContextType {
    isEditting:boolean;
    setIseditting:React.Dispatch<React.SetStateAction<boolean>>;
    profile:ProfileData;
    setProfile: React.Dispatch<React.SetStateAction<ProfileData>>;

}

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

export const UserDataProvider = ({children}:{children:ReactNode}) =>{
    const [isEditting,setIseditting] = useState(false)


    const [profile,setProfile] = useState<ProfileData>({
        name:"",
        email:"",
        avatar:"",
    });

    return (
        <UserDataContext.Provider value={{isEditting,setIseditting,profile,setProfile}}>
            {children}
        </UserDataContext.Provider>
    );
};

export const useUserData = ():UserDataContextType =>  {
    const conText = useContext(UserDataContext)
    if (!conText) {
        throw new Error("useUserData must be used in UserDataProvider");
    };
    return conText;
};

