import React ,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import Style from "./LoginForm.module.css";
import { useAuth } from "../../../contexts/AuthContext";

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
            navigate('/index')
        }
    };

    return (
        <div className={Style.loginFormOverLay}>
          <div className={Style.logimFormContainer}>
              <form onSubmit={loginHandle} className={Style.loginForm}>
                  <h1 className={Style.formTitle}>AppClassにログイン</h1>
                  <hr />
                  <div className={Style.loginUiForm}>
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
                    </div>
                    <button type="submit" className={Style.loginButton}>ログイン</button>
                    <a  href="/signup" className={Style.signupLink}>アカウントを作成する</a>
             </form>
           </div>
        </div>
    );
};

export default LoginForm;