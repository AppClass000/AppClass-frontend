import { useEffect,useState } from "react";
import { fetchClassesData } from "../services/api";
import { ClassesData,ApiResponseUserClass } from "../types/type";



export const useClassesData = () : {classesData:ClassesData[],Loading:boolean} => {
    const [classesData,setClassesData] = useState<ClassesData[]>([])
    const [Loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                 const responseData = await fetchClassesData<ApiResponseUserClass>();
                 if (!Array.isArray(responseData.userclasses)) {
                    console.log("fetchClassesData is not array:",responseData.userclasses);
                    setLoading(false);
                    return;
                 }
                 setClassesData(responseData.userclasses || []);
                 setLoading(false);
            } catch (error) {
                console.error("error in useClassesData:",error);
                setLoading(false);
            };
        };

        fetchData();
        
    },[])
    
    return {classesData,Loading};
}