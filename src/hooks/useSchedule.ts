import { useEffect, useState } from "react";
import { ApiResponse,ScheduleData } from "../types/type";
import { getScheduleData } from "../services/api";


export const useSchedule = (): { ScheduleData:ScheduleData[],setScheduleData: React.Dispatch<React.SetStateAction<ScheduleData[]>>,Loading:boolean} => {

    const [ScheduleData,setScheduleData] = useState<ScheduleData[]>([]);
    const [Loading,setLoading] = useState(true);

    useEffect(() => {
        const feachData = async () => {
            setLoading(true);
            try {
                const data = await getScheduleData<ApiResponse<ScheduleData[]>>();
            if (data && data.registeredClasses	) {
                setScheduleData(data.registeredClasses);
                setLoading(false);
            }} catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }}
    feachData()
    }, []);


    return {ScheduleData,Loading,setScheduleData};
};
