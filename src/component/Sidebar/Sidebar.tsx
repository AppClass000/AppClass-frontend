import React, {useState} from "react";
import { Link ,useLocation} from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext";
import { SidebarData,FooterData } from "./SidebarData";
import Style from "./Sidebar.module.css";
import UserProfile from "../Profile/UserProfile";
import { useUserData } from "../../contexts/UserDataContext";


const Sidebar:React.FC = () => {
    const { Logout } = useAuth()
    const location = useLocation();
    const [isEditting,setIseditting] = useState(false)
    const { profile } = useUserData();
    


    return (
        <div className={Style.SidebarContainer}>
          <ul className={Style.SidebarList}> 
            <li className={Style.SidebarTop} onClick={() => setIseditting(true)} >
              <img src="./usericon.png"/>
              <div className={Style.UserInfo}>
                <h2>{profile.name}</h2>
                <hr />
                <p>{profile.email}</p>
                </div>
            </li> 
            {isEditting && <UserProfile  isOpen={isEditting} onClose={() => setIseditting(false)} />}
            {SidebarData.map((value,key)  => {
              const isSelected = location.pathname === value.link
                return (
                    <li className={`${Style.SidebarRow} ${isSelected && Style.selected}`} key={key} >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <value.icon />
                      <Link to={value.link}><p>{value.title}</p></Link>
                    </li>
                )
            })}          
           
            <div className={Style.SidebarFoot} >
              {FooterData.map((value,key) => {
                const isSelected = location.pathname === value.link
                return (
                  <li className={`${Style.SidebarRow} ${isSelected && Style.selected}`} key={key} >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <value.icon />
                    <Link to={value.link}><p>{value.title}</p></Link>
                  </li>
                )
              })}
            </div>
            <button onClick={Logout} >ログアウト</button>
           </ul> 
           
        </div>
    )
}

export default Sidebar;