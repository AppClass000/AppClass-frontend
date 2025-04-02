import React,{ useState } from "react";
import { useSchedule } from "../../hooks/useSchedule";
import { CheckToolAPI } from "../../services/api";
import Style from "./Schedule.module.css";
import { ScheduleData } from "../../types/type";
import TimeTableModal from "./TimeTableModal";
import { useUserData } from "../../contexts/UserDataContext";

const Schedule:React.FC = () => {
    const { profile } = useUserData()

    const { ScheduleData,setScheduleData, Loading } = useSchedule();
    const [resisteredClass,setRegisteredClass] = useState<ScheduleData | null>(null);
    const [isOpenModal,setOpenModal] = useState(false);

    const onCloseModal = () => {
      if(!isOpenModal) {
          setOpenModal(true);
      }
      setOpenModal(false);
    };

    if (Loading) {
        return (<p>Loading...</p>)
    };

    const getClassName = (schedule:string) => {
        const registeredClass = ScheduleData.find((item) => item.Schedule === schedule);
        return registeredClass ?  registeredClass.ClassName : null;
    };

    const handleGetClassDetail = (schedule: string) => {
      const registeredClass = ScheduleData.find((item) => item.Schedule === schedule);
      if (registeredClass) {
        setRegisteredClass(registeredClass);
        setOpenModal(true);
      };
    };
       
    return (
      <div className={Style.container}>
        <div className={Style.scheduleContainer}>
          <div className={Style.scheduleHeader} >
            <h1 className={Style.scheduleTitle}>{profile.name}さんの時間割</h1>
            <button className={Style.CheckTool} onClick={CheckToolAPI}>条件チェック</button>
          </div>
          <hr />
          <table>
             <thead>
              <tr>
                  <th />
                  <th>月</th>
                  <th>火</th>
                  <th>水</th>
                  <th>木</th>
                  <th>金</th>
              </tr>
             </thead>
             <tbody>
  <tr>
    <td className={Style.timeTable}><b>1限</b><br/>(8:50 - 10:30)</td>
    <td className={`${Style.tableCell}`} id="mon-1" onClick={() => handleGetClassDetail("月1")}><p className={Style.classTitle}><b>{getClassName("月1")}</b></p></td>
    <td className={`${Style.tableCell}`} id="the-1" onClick={() => handleGetClassDetail("火1")}><p className={Style.classTitle}><b>{getClassName("火1")}</b></p></td>
    <td className={`${Style.tableCell}`} id="web-1" onClick={() => handleGetClassDetail("水1")}><p className={Style.classTitle}><b>{getClassName("水1")}</b></p></td>
    <td className={`${Style.tableCell}`} id="thu-1" onClick={() => handleGetClassDetail("木1")}><p className={Style.classTitle}><b>{getClassName("木1")}</b></p></td>
    <td className={`${Style.tableCell}`} id="fri-1" onClick={() => handleGetClassDetail("金1")}><p className={Style.classTitle}><b>{getClassName("金1")}</b></p></td>
  </tr>
  <tr>
    <td className={Style.timeTable}><b>2限</b> <br/>(10:40 - 12:00)</td>
    <td className={`${Style.tableCell}`} id="mon-2" onClick={() => handleGetClassDetail("月2")}><p className={Style.classTitle}><b>{getClassName("月2")}</b></p></td>
    <td className={`${Style.tableCell}`} id="the-2" onClick={() => handleGetClassDetail("火2")}><p className={Style.classTitle}><b>{getClassName("火2")}</b></p></td>
    <td className={`${Style.tableCell}`} id="web-2" onClick={() => handleGetClassDetail("水2")}><p className={Style.classTitle}><b>{getClassName("水2")}</b></p></td>
    <td className={`${Style.tableCell}`} id="thu-2" onClick={() => handleGetClassDetail("木2")}><p className={Style.classTitle}><b>{getClassName("木2")}</b></p></td>
    <td className={`${Style.tableCell}`} id="fri-2" onClick={() => handleGetClassDetail("金2")}><p className={Style.classTitle}><b>{getClassName("金2")}</b></p></td>
  </tr>
  <tr>
    <td className={Style.timeTable}><b>3限</b> <br/>(13:00 - 14:30)</td>
    <td className={`${Style.tableCell}`} id="mon-3" onClick={() => handleGetClassDetail("月3")}><p className={`${Style.classTitle}`}><b>{getClassName("月3")}</b></p></td>
    <td className={`${Style.tableCell}`} id="the-3" onClick={() => handleGetClassDetail("火3")}><p className={Style.classTitle}><b>{getClassName("火3")}</b></p></td>
    <td className={`${Style.tableCell}`} id="web-3" onClick={() => handleGetClassDetail("水3")}><p className={Style.classTitle}><b>{getClassName("水3")}</b></p></td>
    <td className={`${Style.tableCell}`} id="thu-3" onClick={() => handleGetClassDetail("木3")}><p className={Style.classTitle}><b>{getClassName("木3")}</b></p></td>
    <td className={`${Style.tableCell}`} id="fri-3" onClick={() => handleGetClassDetail("金3")}><p className={Style.classTitle}><b>{getClassName("金3")}</b></p></td>
  </tr>
  <tr>
    <td className={Style.timeTable}><b>4限</b> <br/>(14:40 - 16:10)</td>
    <td className={`${Style.tableCell}`} id="mon-4" onClick={() => handleGetClassDetail("月4")}><p className={Style.classTitle}><b>{getClassName("月4")}</b></p></td>
    <td className={`${Style.tableCell}`} id="the-4" onClick={() => handleGetClassDetail("火4")}><p className={Style.classTitle}><b>{getClassName("火4")}</b></p></td>
    <td className={`${Style.tableCell}`} id="web-4" onClick={() => handleGetClassDetail("水4")}><p className={Style.classTitle}><b>{getClassName("水4")}</b></p></td>
    <td className={`${Style.tableCell}`} id="thu-4" onClick={() => handleGetClassDetail("木4")}><p className={Style.classTitle}><b>{getClassName("木4")}</b></p></td>
    <td className={`${Style.tableCell}`} id="fri-4" onClick={() => handleGetClassDetail("金4")}><p className={Style.classTitle}><b>{getClassName("金4")}</b></p></td>
  </tr>
  <tr>
    <td className={Style.timeTable}><b>5限</b> <br/>(16:20 - 17:50)</td>
    <td className={`${Style.tableCell}`} id="mon-5" onClick={() => handleGetClassDetail("月5")}><p className={Style.classTitle}><b>{getClassName("月5")}</b></p></td>
    <td className={`${Style.tableCell}`} id="the-5" onClick={() => handleGetClassDetail("火5")}><p className={Style.classTitle}><b>{getClassName("火5")}</b></p></td>
    <td className={`${Style.tableCell}`} id="web-5" onClick={() => handleGetClassDetail("水5")}><p className={Style.classTitle}><b>{getClassName("水5")}</b></p></td>
    <td className={`${Style.tableCell}`} id="thu-5" onClick={() => handleGetClassDetail("木5")}><p className={Style.classTitle}><b>{getClassName("木5")}</b></p></td>
    <td className={`${Style.tableCell}`} id="fri-5" onClick={() => handleGetClassDetail("金5")}><p className={Style.classTitle}><b>{getClassName("金5")}</b></p></td>
  </tr>

             </tbody> 
          </table> 
        </div>
        <div className={Style.homeworkContainer}>
            <h3 className={Style.homeworkTitle}>宿題リスト</h3>
        </div>
        <TimeTableModal isOpen={isOpenModal} onClose={onCloseModal} selectedClass={resisteredClass} setScheduleData={setScheduleData} />
      </div>
    );
};

export default Schedule;