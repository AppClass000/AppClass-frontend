import React, { FormEvent, ReactEventHandler, useState} from "react";
import Style from "./SignupForm.module.css"
import axios from "axios";

const SignupForm:React.FC = () => {
    const [userName,setUserName] = useState("")
    const [userEmail,setUserEmail] = useState("")
    const [userPassword,setUserPassword] = useState("")

    const submitHandle =(e: React.FormEvent) => {  
      e.preventDefault()
      if (!userName || !userEmail || !userPassword) {
          alert('全ての項目を入力してください')
          return;
      }
      const data = {
          userName,
          userEmail,
          userPassword,
      };
      axios.post("http://localhost:8080/signup",data)
      .then(() => {console.log('データが送信されました')})
      .catch((error:any) => {console.error("送信エラー:",error)})
      
    };
    return (
        <div className={Style.formContainer}>
            <form  onSubmit={submitHandle}>
                <h1>アカウント作成</h1>
                <hr />
                <div className={Style.uiForm}>
                    <div className={Style.formField}>
                        <label>ユーザー名</label>
                        <input type="text" placeholder="ユーザー名" name="username" value={userName} 
                        onChange={(e) => setUserName(e.target.value) }/>
                    </div>
                    <div className={Style.formField}>
                        <label>メールアドレス</label>
                        <input type="text" placeholder="メールアドレス" name="email" value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)} />
                    </div>
                    <div className={Style.formField}>
                        <label>パスワード</label>
                        <input type="password" placeholder="パスワード" name="password" value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="loginButton">登録</button>
                </div>
            </form>
        </div>
    );
};

export default SignupForm