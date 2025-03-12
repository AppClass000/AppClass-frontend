import React from "react";
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext";
import { SidebarData,FooterData } from "./SidebarData";
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import Style from "./Sidebar.module.css";
import { Icon } from "@mui/material";


const Sidebar:React.FC = () => {
    const { Logout } = useAuth()
    return (
        <div className={Style.SidebarContainer}>
          <ul className={Style.SidebarList}> 
            <li className={Style.SidebarTop} >
              <img src="./usericon.png"/>
              <div className={Style.UserInfo}>
                <h2>Tech-Club</h2>
                <hr />
                <p>techclub794@gmail.com</p>
                </div>
            </li> 
      
            {SidebarData.map((value,key)  => {
                return (
                    <li className={Style.SidebarRow} key={key} >
                      <value.icon />
                      <Link to={value.link}><p>{value.title}</p></Link>
                    </li>
                )
            })}  
            <div className={Style.SidebarFoot} >
              {FooterData.map((value,key) => {
                return (
                  <li className={Style.SidebarRow} key={key} >
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