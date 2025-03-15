import React from "react";
import Style from "./SettingPage.module.css";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SettingPage:React.FC = () => {
    const navigate = useNavigate();
    const { Logout } = useAuth();
    return (
        <div className={Style.settingPageContainer}>
          <button  type="button" className={Style.settingPageClose} onClick={() => navigate(-1) }>&times;</button>
          <div className={Style.settigPageContent} > 
            <h1>設定</h1>
            <div className={Style.settingCard} >
              <ul className={Style.settigRows}>
                <li className={Style.settigRow}>ユーザー詳細</li>
                <li className={Style.settigRow}>アカウント設定</li>
              </ul>
              <button onClick={Logout} className={Style.logoutButton}>ログアウト</button>
            </div>
          </div>
          
        </div>
    )
}

export default SettingPage