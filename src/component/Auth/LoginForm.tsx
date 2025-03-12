import React ,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import Style from "./LoginForm.module.css";
import { useAuth } from "../../contexts/AuthContext";

const LoginForm:React.FC = () => {
    const { Login } = useAuth();
    const [userEmail,setUserEmail] = useState("");
    const [userPassword,setUserPassword] = useState("");
    const navigate = useNavigate();
    
    const loginHandle = async (e :React.FormEvent) => {
        e.preventDefault();
        if (!userEmail || !userPassword) {
            alert('全ての項目を入力してください')
            return;
        };
        const success =  await Login(userEmail,userPassword);
        if (success){
            navigate('/userdetail')
        }
    };

    return (
        <div className={Style.formContainer}>
            <form onSubmit={loginHandle}>
                <h1>AppClassにログイン</h1>
                <hr />
                <div className={Style.uiForm}>
                    <div className={Style.formField}>
                        <label>メールアドレス</label>
                        <input type="text" placeholder="メールアドレス" name="email" value={userEmail}
                        onChange={(e) => {setUserEmail(e.target.value)}} />
                    </div>
                    <div className={Style.formField}>
                        <label>パスワード</label>
                        <input type="password" placeholder="パスワード" name="password" value={userPassword}
                        onChange={(e) => {setUserPassword(e.target.value)}}/>
                    </div>
                    <button type="submit" className={Style.loginButton}>ログイン</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;