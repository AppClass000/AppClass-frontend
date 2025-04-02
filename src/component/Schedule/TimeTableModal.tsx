import React from "react";
import Style from "./TimeTableModal.module.css";
import { ScheduleData } from "../../types/type";
import { deleteScheduleData } from "../../services/api";

interface ModalProps {
    isOpen:boolean;
    onClose:() => void;
    setScheduleData:React.Dispatch<React.SetStateAction<ScheduleData[]>>;
    selectedClass:ScheduleData | null ;
}

const TimeTableModal:React.FC<ModalProps> = ({isOpen,onClose,selectedClass,setScheduleData}) => {

    const  handleDeleteSchedule = async (data : ScheduleData):Promise<boolean>  => {
        const responseData =  await deleteScheduleData(data);
        if (responseData === "error") {
            alert("削除に失敗しました")
            return false ;
        }

        setScheduleData((prev) => (prev).filter((item) => item.ClassID != data.ClassID))
        alert("削除しました")
        return true ;
    }

    if (!isOpen || !selectedClass ) {
        return null;
    };

    

    return (
        <div className={Style.modalOverLay} >
            <div className={Style.modalContent}>
                <div className={Style.modalHeaders}>
                    <h2 className={Style.modalTitle}>{selectedClass.ClassName}</h2>
                    <button className={Style.modalCloseButton} onClick={onClose}>&times;</button>
                </div>        
                <p className={Style.modalClassID}>時間割コード:{selectedClass.ClassID}</p>
                <hr />
                <ul className={Style.modalRows}>
                    <li className={Style.modalRow} >担当教員:{selectedClass.Instructor}</li>
                    <li className={Style.modalRow}>開講場所:{selectedClass.Location}</li>
                    <li className={Style.modalRow}>時限:{selectedClass.Schedule}</li>
                    <li className={Style.modalRow}>単位数:{2}</li>
                </ul>
                <div className={Style.modalButtons} >
                    <button className={Style.deleteRegiseredClass} onClick={() => handleDeleteSchedule(selectedClass)}>削除</button>
                    <button className={Style.modalDetailButton}>詳細</button>
                </div>           
           </div>
        </div>
    );
};

export default TimeTableModal;