import axios from "axios";
import { ScheduleData } from "../types/type";

const API_SCHEDULE_URL = "http://localhost:8080/classes/schedule"
const API_DELETE_SCHEDULE_URL = "http://localhost:8080/classes/delete"
const API_USERDETAIL_URL = "http://localhost:8080/classes/userdetail"
const API_CHECKTOOL_URL = "http://localhost:8080/classes/checktool"
const API_CLASSES_URL = "http://localhost:8080/classes/classes"


export const getScheduleData = async <T> ():Promise<T> => {
    try {
       const response = await axios.get<T>(`${API_SCHEDULE_URL}`,
        {
            headers:{ "Content-Type": "application/json"},
            withCredentials:true,
        });
        return response.data;
    } catch (error) {
        console.error("missing get scheduleData:",error);
        return {} as T ;
    }
}

export const deleteScheduleData = async <T>(data:T) => {
    try {
        const response = await axios.post(`${API_DELETE_SCHEDULE_URL}`,
        data,
            {
                headers: {"Content-Type":"application/json"},
                withCredentials:true,
            },
        )
        console.log("success delete")
        return response;
    } catch (error) {
        console.error("missing delete scheduleData:",error);
        return "error";
    }

}

export const getUserDetail = async <T>():Promise<T> => {
    try {
        const response = await axios.get<T>(`${API_USERDETAIL_URL}`,{withCredentials:true});
        return response.data;
    } catch (error) {
        console.error("missing get userdetail",error);
        return {} as T;
    }
};


export const fetchClassesData = async <T>():Promise<T> => {
    try {
      const response = await axios.get<T>(`${API_CLASSES_URL}`,{
        withCredentials:true,
      });
      console.log(response.data);
      return  response.data;
    } catch (error) {
        console.error("error in fetchClassData:",error);
        return {} as T;
    }
};


export const CheckToolAPI = async() => {
    try {
        const response = await axios.get(`${API_CHECKTOOL_URL}`,
        {
            headers:{"Context-Type":"application/json"},
            withCredentials:true,
        }
    )       
    return response.data;

    } catch (error) {
        console.error("missing get checktool response",error)
        return [] 
    }
}