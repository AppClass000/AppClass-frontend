import { useEffect,useState } from "react";
import { getUserDetail } from "../services/api";
import { UserDetailData ,UserDetailDataResponse } from "../types/type"


export const useUserDetail =  () => {
    const [userDetailData,setUserDetailData] = useState<UserDetailData>({Faculty:"",Department:"",Course:""})
    const [Loading,setLoading] = useState(true);

    useEffect(() => {
        const feachData = async () => {
            try {
              const responsedata =  await getUserDetail<UserDetailDataResponse>();
              if (responsedata !== null) {
                  setUserDetailData(responsedata.userdetail);
                  setLoading(false);
              };
              setLoading(false)
              return;
            } catch (error) {
                console.error("occur error in UserDetailHooks:",error);
                setLoading(false);
                return;
            }
        };
    feachData();
    },[])
    
    return {userDetailData, Loading};
}