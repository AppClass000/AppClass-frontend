import React  ,{ useState } from "react";
import Style  from "./DashBord.module.css";
import SignupForm from "./Signup/SignupForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserDetail from "../../hooks/userdetail/UserDetail";
import { useUserData } from "../../contexts/UserDataContext";


const DashBord = () => {
    const [step,setStep] = useState(1)
    const { profile,setProfile} = useUserData();
    const [showSignupForm,setShowSignupForm] = useState(false);
    const [userName,setUserName] = useState("");
    const [submitted,setSubmit] = useState(false);

    const API_URL = process.env.REACT_APP_BACKEND_URL;

    
    

    const submitHandle = async (e: React.FormEvent) => {  
        e.preventDefault()
        if ( !userName) {
            alert('全ての項目を入力してください')
            return;
        }

      const data = {
        "name":userName
       
    };

      try {
        const response =  await axios.post(`${API_URL}user/username`,data,{
            withCredentials:true,
        });
        console.log('データが送信されました');
        setSubmit(true)
    } catch (error) {
       console.error("error in post signupdata:",error);
    };
     
    };

    const changeHandle =(e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.name === "name"){
                setProfile({...profile, [e.target.name]:e.target.value});
                setUserName(e.target.value);
            };
        };

    return (
        <div className={Style.dashBordOverLay}> 
            {step === 1 && !showSignupForm && (
                <div className={Style.dashBordContainer}>
                    <h1 className={Style.dashBordTitle}>アカウントの作成</h1>
                    <hr />
                    <button  className={Style.registeredButton} onClick={() => setShowSignupForm(true)}>サインアップ</button>
                    <a href="/login" >アカウントをお持ちの方は<b>ログイン</b></a>
                    <button className={Style.setStepButton} onClick={() => setStep(2)}>次へ➙</button>
                </div>
            )} 
            {showSignupForm && (
                   <div className={Style.formOverLay}onClick={() => setShowSignupForm(false)} >
                    <div className={Style.formContainer} onClick={(e) => e.stopPropagation()}>
                      <SignupForm setModalOpen={() => setShowSignupForm(false)} isModalOpen={showSignupForm} setStep={setStep} />
                  </div>
                </div>
            ) }

            {step === 2 && (
                <div className={Style.dashBordContainer}>
                <h1 className={Style.dashBordTitle}>ユーザー名の登録</h1>
                <hr />
                <form  onSubmit={submitHandle}>
                  <div className={Style.uiForm}>
                    < div className={Style.formField}>
                          <label>ユーザー名</label>
                          <input type="text" placeholder="ユーザー名" name="name" value={userName}
                          onChange={changeHandle} />
                      </div>
                      <button type="submit" className={Style.registeredButton} >登録</button>
                      {submitted && <h2>登録されました</h2>}
                  </div>   
                </form>
                <button onClick={() => setStep(3)} className={Style.setStepButton}>次へ➙</button>
            </div>
            )}{
                step === 3 && (
                    <div className={Style.dashBordContainer}>
                      <UserDetail />
                    </div>
                )
            }
        </div>
    );
};

export default DashBord;