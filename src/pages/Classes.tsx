import React, {useState,useEffect} from "react";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import axios from "axios"
import Style from "./Classes.module.css";



interface UserClass {
  ClassName: string;
  Instructor: string;
  Schedule: string;
  Location: string;
  IsMandatory: number;
}

interface ApiResponse {
  classes: UserClass[];
}


const Classes:React.FC = () => {
    const [classData, setClassData] = useState<UserClass[]>([])
    const handleClassData = async (classData:UserClass) => {
      
        try {await axios.post("http://localhost:8080/classes/register",classData,
          {
            headers:{"Content-Type":"application/json"},
            withCredentials:true, 
          }
        );
            console.log("classData送信に成功しました");
        } catch(error) {
            console.error("classData送信エラー",classData);
            alert("授業登録失敗しました。再送信して下さい。");
        };
    };

    const fetchClassesData = async () => {

      const response = await axios.get<ApiResponse>('http://localhost:8080/classes/classes',{
        headers:{"Content-Type":"application/json"},
        withCredentials:true,
      });
      console.log(response.data);

      if (Array.isArray(response.data.classes)) {
        setClassData(response.data.classes);
      } else {console.log('配列ではないデータが返されました');
        setClassData([]);
      };
    };

    useEffect(() => {
        fetchClassesData()
      
    },[]);

    const classesNode = classData.map((classItem:UserClass,index:any) => {
     const isMandatory= classItem.IsMandatory === 1 ? Style.IsMandatory : "";

     return(
        <div className={Style.card} key={index} >
          <div className={Style.cardContext} >
            <h3 className={`${Style.classTitle} ${isMandatory}`}>
              {classItem.ClassName}
              </h3>
            <div className={Style.icons}>
              <div className={Style.icon}>
                <HowToRegIcon />
                <p className={Style.instroctor}>{classItem.Instructor}</p>
              </div>
              <div className={Style.icon}>
                <AccessTimeIcon />
                <p className={Style.schedule}>{classItem.Schedule}</p>  
              </div> 
              <div className={Style.icon}>
                <AddLocationAltIcon />
                <p className={Style.location}>{classItem.Location}</p>
              </div>
            </div>
           </div>
          <div className={Style.buttonContainer} >
            <button className={Style.detailButton}>詳細</button>
            <button className={Style.submitButton} type="submit"  onClick={() => handleClassData(classItem)}>
              登録
            </button>
          </div>
        </div>
         )
      }
    );
    
    if (!classData || classData.length === 0) {
       return <h1>データがありません</h1>
     };

    return (
      <div className={Style.container} >
        <div className={Style.classesContainer}>
          <h1 className={Style.classesTitle}>Tech-Clubさんの授業リスト</h1>
          <hr />
          <p className={Style.hittedNumber}>現在<b>{classData.length}</b>件ヒットしました</p>
          <div className={Style.classesNode}>
            {classesNode}
          </div>
        </div>
        <div className={Style.filterContainer}>
          <h3>フィルター</h3>
          <p>授業を絞り込むことが出来ます(複数選択可)</p>
          <button className={Style.filterCard} >
            <p>必修科目のみ</p>
          </button>
        </div>
      </div>
    );
  };


export default Classes;
