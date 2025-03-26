import React ,{ useEffect } from "react";
import Style from "./IndexPage.module.css";
import { useUserData } from "../contexts/UserDataContext";
import { useUserDetail } from "../hooks/useUserDetail";
import { getProfileUserID } from "../services/api";
import SchoolIcon from '@mui/icons-material/School';
import { ProfileData } from "../types/type";

const IndexPage:React.FunctionComponent = () => {
    const { profile,setProfile } = useUserData();
    const { userDetailData } = useUserDetail();
    

  useEffect(() => {
    const fetchData = async () => {
      try {
            const response = await getProfileUserID<ProfileData>();
            console.log("profile:",response.name)
            setProfile(prevProfile => ({...prevProfile,"name":response.name,"email":response.email}))

      } catch (error) {
        console.error("error in getProfile:",error);

      };
    };

    fetchData();
  },[])

    return (
      <div className={Style.indexPageContainer}>
        <div className={Style.indexPageHeader} >       
          <h1 className={Style.indexPageTitle} >AppClass</h1>
          <SchoolIcon  className={Style.indexPageIcon}/>
        </div>
        <p>あなたの履修登録を快適にし、<br/>理想のキャンパスライフを提供します</p>
        <div className={Style.userDetailInfo} >
            <h2 >{profile.name}さん</h2>
            <ul className={Style.userDetailList}>
                <li className={Style.userDetailRow} >学部:{userDetailData.Faculty}</li>
                <li className={Style.userDetailRow} >学科:{userDetailData.Department}</li>
                <li className={Style.userDetailRow} >コース:{userDetailData.Course}</li>
            </ul>

        </div>
      </div>
    )

};

export default IndexPage;