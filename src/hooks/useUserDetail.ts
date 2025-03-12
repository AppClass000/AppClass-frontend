import { useEffect,useState } from "react";
import { getUserDetail } from "../services/api";


export const useUserDetail = () => {
    const [userDetailData,setUserDetailData] = useState({})

    useEffect(() => {
        try {
            const responsedata = getUserDetail();
            if (responsedata !== null) {
                setUserDetailData(responsedata);
                return; }
        } catch (error) {
            console.error("occur error in UserDetailHooks:",error);
        }
    },[])
    
    return userDetailData;
}