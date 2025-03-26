import React from "react";
import Style from "./SettingPage.module.css";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SettingPage:React.FC = () => {
  alert("※このページは実装段階です、リリースまでお待ちください")
    const navigate = useNavigate();
    const { Logout } = useAuth();
    return (
        <div className={Style.settingPageContainer}>
          <button  type="button" className={Style.settingPageClose} onClick={() => navigate(-1) }>&times;</button>
          <div className={Style.settigPageContent} > 
            <h1>設定</h1>
            <div className={Style.settingCard} >
              <ul className={Style.settigRows}>
                <a className={Style.settigRow} href="/userdetail" >ユーザー詳細</a>
                <a className={Style.settigRow}>アカウント設定</a>

              </ul>
              <button onClick={Logout} className={Style.logoutButton}>ログアウト</button>
            </div>
          </div>
          
        </div>
    )
}

export default SettingPage