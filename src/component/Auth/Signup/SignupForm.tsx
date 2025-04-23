import React, {  useState} from "react";
import { useUserData } from "../../../contexts/UserDataContext";
import Style from "./SignupForm.module.css";
import axios from "axios";

interface ModalProps  {
    setModalOpen:() => void;
    isModalOpen:boolean;
    setStep:(num :number) => void;

}

const SignupForm:React.FC<ModalProps> = ({setModalOpen,isModalOpen,setStep}) => {

    const API_URL = process.env.REACT_APP_BACKEND_URL;

    const { profile,setProfile} = useUserData();
    const [userEmail,setUserEmail] = useState("")
    const [userPassword,setUserPassword] = useState("")

    const submitHandle = async (e: React.FormEvent) => {  
      e.preventDefault()
      if ( !userEmail || !userPassword) {
          alert('全ての項目を入力してください')
          return;
      }
      const data = {
        "email": userEmail,
        "password":userPassword,
      };
      
      try {
           const response =  await axios.post(`${API_URL}/user/signup`,data,
            {
                headers :{"Content-Type":"application/json"},    
                withCredentials : true,
            }
           );
           if (response.data) {
             console.log('データが送信されました');
             setStep(2);
             setModalOpen()
           }
           console.log("errror in signup")
          

      } catch (error) {
        console.error("error in post signupdata:",error);
        alert("登録済みです")
        };
    };
    

    const changeHandle =(e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "email"){
             setProfile({...profile, [e.target.name]:e.target.value});
            setUserEmail(e.target.value);
        } else if (e.target.name === "password") {
            setUserPassword(e.target.value);
        };
    };

    if (!isModalOpen) {
        return null;
    }

    return (
        <div className={Style.signupFormContainer}>
            <form  onSubmit={submitHandle}>
                <div className={Style.signupFormHeader} >
                  <h1 className={Style.formTitle}>アカウント作成</h1>
                  <button onClick={setModalOpen} className={Style.closeSignupForm} >&times;</button>
                </div>
                <hr />
                <div className={Style.signupUiForm}>
                    <div className={Style.formField}>
                        <label>メールアドレス</label>
                        <input type="text" placeholder="メールアドレス" name="email" value={userEmail}
                        onChange={changeHandle} />
                    </div>
                    <div className={Style.formField}>
                        <label>パスワード</label>
                        <input type="password" placeholder="パスワード" name="password" value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className={Style.signupButton}>登録</button>
                </div>
                <a href="/login" className={Style.loginLink}>ログインはこちら</a>
            </form>
        </div>
    );
};

export default SignupForm