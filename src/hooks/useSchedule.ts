import { useEffect, useState } from "react";
import { ApiResponse,scheduleData } from "../types/type";
import { getScheduleData } from "../services/api";


export const useSchedule = (): { ScheduleData:scheduleData[],Loading:boolean} => {

    const [ScheduleData,setScheduleData] = useState<scheduleData[]>([]);
    const [Loading,setLoading] = useState(true);

    useEffect(() => {
        const feachData = async () => {
            setLoading(true);
            try {
                const data = await getScheduleData<ApiResponse<scheduleData[]>>();
            if (data && data.registered_classes) {
                setScheduleData(data.registered_classes);
                setLoading(false);
            }} catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
        }
        feachData()},[]);


    return {ScheduleData,Loading};
};
