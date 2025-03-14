import React from "react";
import Style from "./TimeTableModal.module.css";
import { ScheduleData } from "../../types/type";
import { deleteScheduleData } from "../../services/api";

interface ModalProps {
    isOpen:boolean;
    onClose:() => void;
    selectedClass:ScheduleData | null ;
}

const TimeTableModal:React.FC<ModalProps> = ({isOpen,onClose,selectedClass}) => {

    const  handleDeleteSchedule = async (data : ScheduleData) => {
        const responseData =  await deleteScheduleData(data);
        if (responseData === "error") {
            alert("削除に失敗しました")
            return ;
        }
        alert("削除しました")
        return ;
    }

    if (!isOpen || !selectedClass ) {
        return null;
    };

    

    return (
        <div className={Style.modalOverLay} >
            <div className={Style.modalContent}>
                <h2 className={Style.modalTitle}>{selectedClass.ClassName}</h2>
                <p className={Style.modalClassID}>時間割コード:{selectedClass.ClassID}</p>
                <button className={Style.modalCloseButton} onClick={onClose}>&times;</button>
                <hr />
                <ul className={Style.modalRows}>
                    <li className={Style.modalRows} >・担当教員:{selectedClass.Instructor}</li>
                    <li className={Style.modalRows}>・開口場所:{selectedClass.Location}</li>
                    <li className={Style.modalRows}>・時限:{selectedClass.Schedule}</li>
                    <li className={Style.modalRows}>・単位数:{2}</li>
                </ul>
            <button className={Style.deleteRegiseredClass} onClick={() => handleDeleteSchedule(selectedClass)}>削除</button>
            <button className={Style.detailClassesButton}>詳細</button>
            </div>
        </div>
    );
};

export default TimeTableModal;