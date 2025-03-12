import React from "react";
import { useSchedule } from "../../hooks/useSchedule";

import { CheckToolAPI } from "../../services/api";
import Style from "./Schedule.module.css";

const Schedule:React.FC = () => {

    const { ScheduleData, Loading } = useSchedule();

    if (Loading) {
        return (<p>Loading...</p>)
    };
   
    const getClassName = (key:string) => {
        return (ScheduleData || [])
        .filter((data) => data.Schedule === key)
        .map((data) => data.ClassName)
        .join(", ") || "なし";
    };
       
    return (
      <div className={Style.container}>
        <div className={Style.scheduleContainer}>
          <div className={Style.scheduleHeader} >
            <h1>Tech-Clubさんの時間割</h1>
            <button className={Style.CheckTool} onClick={CheckToolAPI}>条件チェック</button>
          </div>
          <hr />
          <table>
             <thead>
              <tr>
                  <th>時間</th>
                  <th>月曜日</th>
                  <th>火曜日</th>
                  <th>水曜日</th>
                  <th>木曜日</th>
                  <th>金曜日</th>
              </tr>
             </thead>
             <tbody>
              <tr>
                  <td className={Style.timeTable}>1 (8:50 - 10:30)</td>
                  <td id="mon-1">{getClassName("月1")}</td>
                  <td id="the-1">{getClassName("火1")}</td>
                  <td id="web-1">{getClassName("水1")}</td>
                  <td id="thu-1">{getClassName("木1")}</td>
                  <td id="fri-1">{getClassName("金1")}</td>
              </tr>
              <tr> 
                  <td  className={Style.timeTable}>2 (10:40 - 12:00)</td>  
                  <td id="mon-2" >{getClassName("月2")}</td>
                  <td id="the-2" >{getClassName("火2")}</td>
                  <td id="web-2" >{getClassName("水2")}</td>
                  <td id="thu-2" >{getClassName("木2")}</td>
                  <td id="fri-2" >{getClassName("金2")}</td>
              </tr>  
              <tr>  
                  <td  className={Style.timeTable}>3 (13:00 - 14:30)</td> 
                  <td id="mon-3">{getClassName("月3")}</td>
                  <td id="the-3">{getClassName("火3")}</td>
                  <td id="web-3">{getClassName("水3")}</td>
                  <td id="thu-3">{getClassName("木3")}</td>
                  <td id="fri-3">{getClassName("金3")}</td>
              </tr> 
              <tr> 
                  <td  className={Style.timeTable}>4 (14:40 - 16:10)</td> 
                  <td id="mon-4">{getClassName("月4")}</td>
                  <td id="the-4">{getClassName("火4")}</td>
                  <td id="web-4">{getClassName("水4")}</td>
                  <td id="thu-4">{getClassName("木4")}</td>
                  <td id="fri-4">{getClassName("金4")}</td>
              </tr> 
              <tr> 
                  <td  className={Style.timeTable}>5 (16:20 - 17:50)</td> 
                  <td id="mon-5">{getClassName("月5")}</td>
                  <td id="the-5">{getClassName("火5")}</td>
                  <td id="web-5">{getClassName("水5")}</td>
                  <td id="thu-5">{getClassName("木5")}</td>
                  <td id="fri-5">{getClassName("金5")}</td>
              </tr> 
             </tbody> 
          </table> 
        </div>
        <div className={Style.homeworkContainer}>
            <h3 className={Style.homeworkTitle}>宿題リスト</h3>
        </div>
      </div>
    );
};

export default Schedule;