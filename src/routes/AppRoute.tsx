import { Routes, Route, Navigate,useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import useFetchProfile from "../hooks/useFetchProfile";
import { useUserData } from '../contexts/UserDataContext';
import Sidebar from '../component/Sidebar/Sidebar'
import SettingPage from "../pages/SettingPage";
import LoginForm from '../component/Auth/Login/LoginForm';
import Classes from '../pages/classes/Classes';
import Schedule from '../component/Schedule/Schedule';
import UserDetail from '../hooks/userdetail/UserDetail';
import DashBord from "../component/Auth/DashBord";
import IndexPage from "../pages/IndexPage";

const Approute: React.FC = () => {
  const location = useLocation();
  const hideSidebar = location.pathname === "/setting";
  const { loggedIn } = useAuth(); 
  const { profile,setProfile} = useUserData();
  useFetchProfile();

  if (loggedIn === null) {
    return <p>Loading...</p>
  }; 

  return (
    <>
        {!loggedIn ? (
          <Routes>
            <Route path="/" element={<DashBord />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='*'  element={<Navigate to={"/"}/>} />
          </Routes>
        ) : (
          <>
          {!hideSidebar && <Sidebar />}
            <Routes >
              <Route path='/classes' element={<Classes />} />
              <Route path='/userdetail' element={<UserDetail />} />
              <Route path='/schedule' element={<Schedule />} />
              <Route path='/index' element={<IndexPage profile={profile} setProfile={setProfile}/>} />
              <Route path='/setting' element={<SettingPage />} />
              <Route path='*'  element={<Navigate to={"/index"}/>}  />
            </Routes>
          </>
        )}
    </>
  )
};

export default  Approute;