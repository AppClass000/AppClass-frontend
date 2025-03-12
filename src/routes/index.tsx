import { useState } from 'react'; 
import { Routes, Route, Navigate,useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Sidebar from '../component/Sidebar/Sidebar'
import SettingPage from "../pages/SettingPage";
import SignupForm from '../component/Auth/SignupForm';
import LoginForm from '../component/Auth/LoginForm';
import Classes from '../pages/Classes';
import Schedule from '../component/Schedule/Schedule';
import UserDetail from '../pages/UserDetail';


const Approute: React.FC = () => {
  const location = useLocation();
  const hideSidebar = location.pathname === "/setting";
  const { loggedIn } = useAuth(); 

  if (loggedIn === null) {
    return <p>Loading...</p>
  }; 
  

  return (
    <>
        {!loggedIn ? (
          <Routes>
            <Route path='/signup' element={<SignupForm />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='*'  element={<Navigate to={"/login"}/>} />
          </Routes>
        ) : (
          <>
          {!hideSidebar && <Sidebar />}
            <Routes >
              <Route path='/classes' element={<Classes />} />
              <Route path='/schedule' element={<Schedule />} />
              <Route path='/userdetail' element={<UserDetail />} />
              <Route path='/setting' element={<SettingPage />} />
              <Route path='*'  element={<Navigate to={"/userdetail"}/>}  />
            </Routes>
          </>
        )}
    </>
  )
};

export default  Approute;