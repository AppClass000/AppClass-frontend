import React,{ useState } from "react";
import { useSchedule } from "../../hooks/useSchedule";
import { CheckToolAPI } from "../../services/api";
import Style from "./Schedule.module.css";
import { ScheduleData } from "../../types/type";
import TimeTableModal from "./TimeTableModal";

const Schedule:React.FC = () => {

    const { ScheduleData, Loading } = useSchedule();
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
            <h1 className={Style.scheduleTitle}>Tech-Clubさんの時間割</h1>
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
  <td className={`${Style.tableCell}`} id="mon-1" onClick={() => handleGetClassDetail("月1")}>{getClassName("月1")}</td>
  <td className={`${Style.tableCell}`} id="the-1" onClick={() => handleGetClassDetail("火1")}>{getClassName("火1")}</td>
  <td className={`${Style.tableCell}`} id="web-1" onClick={() => handleGetClassDetail("水1")}>{getClassName("水1")}</td>
  <td className={`${Style.tableCell}`} id="thu-1" onClick={() => handleGetClassDetail("木1")}>{getClassName("木1")}</td>
  <td className={`${Style.tableCell}`} id="fri-1" onClick={() => handleGetClassDetail("金1")}>{getClassName("金1")}</td>
</tr>
<tr>
  <td className={Style.timeTable}><b>2限</b> <br/>(10:40 - 12:00)</td>
  <td className={`${Style.tableCell}`} id="mon-2" onClick={() => handleGetClassDetail("月2")}>{getClassName("月2")}</td>
  <td className={`${Style.tableCell}`} id="the-2" onClick={() => handleGetClassDetail("火2")}>{getClassName("火2")}</td>
  <td className={`${Style.tableCell}`} id="web-2" onClick={() => handleGetClassDetail("水2")}>{getClassName("水2")}</td>
  <td className={`${Style.tableCell}`} id="thu-2" onClick={() => handleGetClassDetail("木2")}>{getClassName("木2")}</td>
  <td className={`${Style.tableCell}`} id="fri-2" onClick={() => handleGetClassDetail("金2")}>{getClassName("金2")}</td>
</tr>
<tr>
  <td className={Style.timeTable}><b>3限</b> <br/>(13:00 - 14:30)</td>
  <td className={`${Style.tableCell}`} id="mon-3" onClick={() => handleGetClassDetail("月3")}>{getClassName("月3")}</td>
  <td className={`${Style.tableCell}`} id="the-3" onClick={() => handleGetClassDetail("火3")}>{getClassName("火3")}</td>
  <td className={`${Style.tableCell}`} id="web-3" onClick={() => handleGetClassDetail("水3")}>{getClassName("水3")}</td>
  <td className={`${Style.tableCell}`} id="thu-3" onClick={() => handleGetClassDetail("木3")}>{getClassName("木3")}</td>
  <td className={`${Style.tableCell}`} id="fri-3" onClick={() => handleGetClassDetail("金3")}>{getClassName("金3")}</td>
</tr>
<tr>
  <td className={Style.timeTable}><b>4限</b> <br/>(14:40 - 16:10)</td>
  <td className={`${Style.tableCell}`} id="mon-4" onClick={() => handleGetClassDetail("月4")}>{getClassName("月4")}</td>
  <td className={`${Style.tableCell}`} id="the-4" onClick={() => handleGetClassDetail("火4")}>{getClassName("火4")}</td>
  <td className={`${Style.tableCell}`} id="web-4" onClick={() => handleGetClassDetail("水4")}>{getClassName("水4")}</td>
  <td className={`${Style.tableCell}`} id="thu-4" onClick={() => handleGetClassDetail("木4")}>{getClassName("木4")}</td>
  <td className={`${Style.tableCell}`} id="fri-4" onClick={() => handleGetClassDetail("金4")}>{getClassName("金4")}</td>
</tr>
<tr>
  <td className={Style.timeTable}><b>5限</b> <br/>(16:20 - 17:50)</td>
  <td className={`${Style.tableCell}`} id="mon-5" onClick={() => handleGetClassDetail("月5")}>{getClassName("月5")}</td>
  <td className={`${Style.tableCell}`} id="the-5" onClick={() => handleGetClassDetail("火5")}>{getClassName("火5")}</td>
  <td className={`${Style.tableCell}`} id="web-5" onClick={() => handleGetClassDetail("水5")}>{getClassName("水5")}</td>
  <td className={`${Style.tableCell}`} id="thu-5" onClick={() => handleGetClassDetail("木5")}>{getClassName("木5")}</td>
  <td className={`${Style.tableCell}`} id="fri-5" onClick={() => handleGetClassDetail("金5")}>{getClassName("金5")}</td>
</tr>

             </tbody> 
          </table> 
        </div>
        <div className={Style.homeworkContainer}>
            <h3 className={Style.homeworkTitle}>宿題リスト</h3>
        </div>
        <TimeTableModal isOpen={isOpenModal} onClose={onCloseModal} selectedClass={resisteredClass} />
      </div>
    );
};

export default Schedule;