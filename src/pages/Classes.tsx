import React, {useState,useEffect} from "react";
import { ClassesData,ApiResponseUserClass } from "../types/type";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import axios from "axios"
import Style from "./Classes.module.css";
import { useClassesData } from "../hooks/useClassesData";
import { LoadingPage } from "../component/Common/LoadingPage";



const Classes:React.FC = () => {
    const {classesData,Loading} = useClassesData();

    const registerClassData = async (classData:ClassesData) => {
        try {const response = await axios.post("http://localhost:8080/classes/register",classData,
          {
            headers:{"Content-Type":"application/json"},
            withCredentials:true, 
          }
        );
        if (response.status === 204) {
          alert("登録済みです");
        }
        console.log("classData送信に成功しました");
        } catch(error) {
            console.error("classData送信エラー",classData);
            alert("授業登録失敗しました。再送信して下さい。");
        };
    };


    const classesNode = classesData.map((classItem:ClassesData,index:any) => {
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
            <button className={Style.submitButton} type="submit"  onClick={() => registerClassData(classItem)}>
              登録
            </button>
          </div>
        </div>
         )
      }
    );

    if (Loading) {
      return <LoadingPage />
    }
    
    if (!classesData || classesData.length === 0) {
       return <h1>データがありません</h1>
     };


    return (
      <div className={Style.container} >
        <div className={Style.classesContainer}>
          <h1 className={Style.classesTitle}>Tech-Clubさんの授業リスト</h1>
          <hr />
          <p className={Style.hittedNumber}>現在<b>{classesData.length}</b>件ヒットしました</p>
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
