import axios from "axios";

const API_URL =process.env.BACKEND_URL
const API_SCHEDULE_URL = `${API_URL}/classes/schedule`
const API_DELETE_SCHEDULE_URL = `${API_URL}/classes/delete`
const API_USERDETAIL_URL = `${API_URL}/user/userdetail`
const API_CHECKTOOL_URL = `${API_URL}/classes/checktool`
const API_CLASSES_URL = `${API_URL}/classes/classes`
const API_PROFILE_URL =  `${API_URL}/user/profile`



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
        const response = await axios.post(API_DELETE_SCHEDULE_URL,
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
        const response = await axios.get<T>(API_USERDETAIL_URL,{withCredentials:true});
        return response.data;
    } catch (error) {
        console.error("missing get userdetail",error);
        return {} as T;
    }
};


export const fetchClassesData = async <T>():Promise<T> => {
    try {
      const response = await axios.get<T>(API_CLASSES_URL,{
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
        const response = await axios.get(API_CHECKTOOL_URL,
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

export const getProfileUserID = async <T>():Promise<T> => {
   
    try {
         const response = await axios.get<T>(API_PROFILE_URL,{
        withCredentials:true,
        });
        return response.data;
    } catch (error) {
        console.error("error in",error);
        return {} as T;
    };
};