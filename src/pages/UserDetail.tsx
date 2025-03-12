import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Style from "./UserDetail.module.css";

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
  const [submit,setSubmit] = useState(false);
  const navigate = useNavigate();

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

    try {const response = await axios.post<ResponseData>("http://localhost:8080/classes/classes",data, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,})
    console.log('Success:',response.data);
    setSubmit(true);
    navigate("/classes");
    } catch (error) {
      console.log("Error:",error) };
  };

  


    return (
      <>
        <div className={Style.userdetail}>
          <form onSubmit={handleSubmit} id="userform">
            <h1>あなたの情報を教えてください</h1>
            <div className={Style.uiForm}>
              <label htmlFor="faculty">学部</label>
              <input type="text" name="faculty" id="faculty"
              value={faculty} onChange={(e) => setFaculty(e.target.value)} />
            </div>
            <div className={Style.uiForm}>
              <label htmlFor="department">学科</label>
              <input type="text" name="department" id="department" 
              value={department} onChange={(e) => setDepartment(e.target.value)}/>
            </div>
            <div className={Style.uiForm}>
              <label htmlFor="course">コース</label>
              <input type="text" name="course" id="course" 
              value={course} onChange={(e) => setCourse(e.target.value)}/>
            </div>
            <button type="submit" id="submit" >決定</button>
          </form>
          {submit && <p>データが登録されました</p>}
        </div>
      </>
    );
};

export default UserDetail;