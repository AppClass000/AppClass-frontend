import axios from "axios";

const API_SCHEDULE_URL = "http://localhost:8080/classes/schedule"
const API_USERDETAIL_URL = "http://localhost:8080/user/userdetail"
const API_CHECKTOOL_URL = "http://localhost:8080/classes/checktool"


export const getScheduleData = async <T> ():Promise<T> => {
    try {
       const response = await axios.get<T>(`${API_SCHEDULE_URL}`,
        {
            headers:{ "Content-Type": "application/json"},
            withCredentials:true,
        }
       )
        return response.data;
    } catch (error) {
        console.error("missing get scheduleData:",error);
        return {} as T ;
    }
}

export const getUserDetail = async () => {
    try {
        const response = await axios.get(`${API_USERDETAIL_URL}`,{withCredentials:true});
        return response.data;
    } catch (error) {
        console.error("missing get userdetail",error);
        return null;
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