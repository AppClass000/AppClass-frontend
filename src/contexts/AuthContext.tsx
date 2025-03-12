import { useState,useEffect, createContext,useContext, ReactNode} from 'react';
import axios from "axios";

interface AuthContextType {
    loggedIn:boolean | null;
    Login: (email:string,password:string) => Promise<boolean>;
    Logout: () => void;
};

interface TokenData {
    token :string;
}

const CHECK_AUTH_URL = "http://localhost:8080/user/ckeckauth";
const LOGIN_URL = "http://localhost:8080/user/login";
const LOGOUT_URL = "http://localhost:8080/user/logout";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}:{children:ReactNode}) => {
    const [loggedIn, setLoggedIn] = useState<boolean|null >(null);

    useEffect(() => {
        const checkAuth = async() => {
          try {const response = await axios.get(`${CHECK_AUTH_URL}`,{ withCredentials:true})
            if (response.status === 200) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false)
            }
          } catch (error) {
            console.error("error in ckeckAuth:",error)
            setLoggedIn(false)
          }
        };
        checkAuth();
    },[]);

    const Login = async (email:string,password:string) => {
        const data = {email,password};
        try {
            const response = await axios.post<TokenData>(`${LOGIN_URL}`,
                data,
                {
                    headers :{"Content-Type":"application/json"},    
                    withCredentials : true,
                }
            );
            console.log(response);
            setLoggedIn(true);
            return true
        } catch (error) {
            console.error("リクエストエラー:",error)
            return false;
        };
    };
    const Logout = async() => {
        try {
            await axios.post(`${LOGOUT_URL}`,{},{withCredentials:true,})
        } catch (error) {
            console.error("logout error:",error)
        }
        setLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{loggedIn, Login, Logout}} >
            {children}
        </AuthContext.Provider>
    );
} 

export const useAuth = ():AuthContextType => {
    const context = useContext(AuthContext)
    if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')}
    
    return context;
};