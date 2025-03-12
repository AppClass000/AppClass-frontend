import React from "react";
import Style from "./SettingPage.module.css";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SettingPage:React.FC = () => {
    const navigate = useNavigate();
    const { Logout } = useAuth();
    return (
        <div className={Style.settingPageContainer}>
            <button  type="button" onClick={() => navigate(-1) }>閉じる</button>

            <div className={Style.settingCard} >
              <h1>設定</h1>
              <div className={Style.userDetail}>
            <h1>ユーザー詳細</h1>
              </div>
              <div className={Style.userAccount}>
                <h1>アカウント設定</h1>
              </div>

            </div>
            <button onClick={Logout} className={Style.logoutButton}>ログアウト</button>
        </div>
    )
}

export default SettingPage