import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Style from "./UserDetail.module.css";
import { useAuth } from "../../contexts/AuthContext";

interface Classes {
  faculty: string;
  department: string;
  course: string;
}

interface ResponseData {
  classes:Classes;
}

const UserDetail:React.FC = () => {
  const [faculty,setFaculty] = useState('');
  const [department,setDepartment] = useState('');
  const [course,setCourse] = useState('');
  const navigate = useNavigate();
  const { loggedIn,setLoggedIn } = useAuth()



  const  handleSubmit = async(e :React.FormEvent) => {
    e.preventDefault()
    const data = {
      faculty,
      department,
      course,
    };
    if (data.faculty === "" || data.department === "") {
      alert("学部と学科を入力してください");
      return;
    };

    try {const response = await axios.post<ResponseData>("http://localhost:8080/user/userdetail",data, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,})
    console.log('Success:',response.data);
    setLoggedIn(true);
    navigate("/index")
    } catch (error) {
      console.log("Error:",error) };
  };

  // useEffect(() => {
  //   if (
  //     userDetailData.Faculty !== "" || 
  //     userDetailData.Department !== "" || 
  //     userDetailData.Course !== ""
  //   ) {
  //     setFaculty(userDetailData.Faculty);
  //     setDepartment(userDetailData.Department);
  //     setCourse(userDetailData.Course);
  //   }
  // }, [userDetailData]); 
  
  // if (Loading) {
  //   return <LoadingPage />
  // };

    return (
        <div className={Style.userDetailContainer}>
          <form onSubmit={handleSubmit} className={Style.userDetailForm}>
            <h1 className={Style.userDetailTitle}>あなたの情報を教えてください</h1>
              <div className={Style.userDetailUiForm}>
                <label htmlFor="faculty">学部</label>
                <input type="text" name="faculty" id="faculty"
                value={faculty} onChange={(e) => setFaculty(e.target.value)} />
              </div>
              <div className={Style.userDetailUiForm}>
                <label htmlFor="department">学科</label>
                <input type="text" name="department" id="department" 
                value={department} onChange={(e) => setDepartment(e.target.value)}/>
              </div>
              <div className={Style.userDetailUiForm}>
                <label htmlFor="course">コース</label>
                <input type="text" name="course" id="course" 
                 value={course} onChange={(e) => setCourse(e.target.value)}/>
              </div>
              <button type="submit" className={Style.submitButton} >決定</button>
          </form>
        </div>
    );
};

export default UserDetail;