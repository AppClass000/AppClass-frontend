
import React, { useState, useMemo } from "react";
import { ClassesData } from "../../types/type";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import axios from "axios";
import Style from "./Classes.module.css";
import { useClassesData } from "../../hooks/useClassesData";
import { LoadingPage } from "../../component/Common/LoadingPage";
import { useUserData } from "../../contexts/UserDataContext";


const Classes: React.FC = () => {
  const { profile } = useUserData()

  const { classesData, Loading } = useClassesData();

  const [filter, setFilter] = useState({
    isMandatory: false,
    isCore: false,
    isCommon: false,
    isIntroductory: false,
  });

  
  const toggleFilter = (key: keyof typeof filter) => {
    setFilter((prev) => ({
      ...prev,
      [key]: !prev[key],}))
  };

  const filteredClasses = useMemo(() => {
    return classesData.filter((classItem) => {
      if (
        filter.isMandatory && !classItem.IsMandatory ||
        filter.isCore && !classItem.IsCore ||
        filter.isCommon && !classItem.IsCommon ||
        filter.isIntroductory && !classItem.IsIntroductory
      ) {
        return false;
      }
      return true;
    });
  }, [classesData, filter]);

  const registerClassData = async (classData: ClassesData) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/classes/register",
        classData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response.status === 204) {
        alert("登録済みです");
      }
      console.log("classData送信に成功しました");
    } catch (error) {
      console.error("classData送信エラー", classData);
      alert("授業登録失敗しました。再送信して下さい。");
    }
  };

  if (Loading) return <LoadingPage />;
  if (!classesData || classesData.length === 0) return <h1>データがありません</h1>;

  return (
    <div className={Style.container}>
      <div className={Style.classesContainer}>
        <h1 className={Style.classesTitle}>{profile.name}さんの授業リスト</h1>
        <hr />
        <p className={Style.hittedNumber}>
          現在<b>{filteredClasses.length}</b>件ヒットしました
        </p>
        <div className={Style.classesNode}>
          {filteredClasses.map((classItem, index) => {

            const isMandatory = classItem.IsMandatory ? Style.IsMandatory : "";
            const isCore = classItem.IsCore ? Style.IsCore : "";
            return (
              <div className={Style.card} key={index}>
                <div className={Style.cardContext}>
                  <h3 className={`${Style.classTitle} ${isMandatory} ${isCore}`}>
                    {classItem.ClassName}
                  </h3>
                  <div className={Style.icons}>
                    <div className={Style.icon}>
                      <HowToRegIcon />
                      <p className={Style.instroctor}>{classItem.Instructor}</p>
                    </div>
                    <div className={Style.icon}>
                      <AccessTimeIcon />
                      <p className={Style.schedule}>{classItem.Schedule}</p>
                    </div>
                    <div className={Style.icon}>
                      <AddLocationAltIcon />
                      <p className={Style.location}>{classItem.Location}</p>
                    </div>
                  </div>
                </div>
                <div className={Style.buttonContainer}>
                  <button className={Style.detailButton}>詳細</button>
                  <button
                    className={`${Style.submitButton}`}
                    type="submit"
                    onClick={() => {registerClassData(classItem)}  }
                  >
                    登録
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={Style.filterContainer}>
        <h3 className={Style.filterTitle}>フィルター</h3>
        <p className={Style.descriptonFilter}>授業を絞り込むことが出来ます(複数選択可)</p>
        <button
          className={`${Style.filterCard} ${filter.isMandatory ? Style.active : ""}  ${filter.isMandatory && Style.selectedFilter}`}
          onClick={() => toggleFilter("isMandatory")}
        >
          <p className={Style.isMandatoryText}>必修科目のみ</p>
        </button>
        <button
          className={`${Style.filterCard} ${filter.isCore ? Style.active  : ""} ${filter.isCore && Style.selectedFilter}`}
          onClick={() => toggleFilter("isCore")}
        >
          <p className={Style.isCoreText}>基幹科目のみ</p>
        </button>
        <button
          className={`${Style.filterCard} ${filter.isCommon ? Style.active : ""}  ${filter.isCommon && Style.selectedFilter}`}
          onClick={() => toggleFilter("isCommon")}
        >
          <p className={Style.isCommonText}>共通・教養科目のみ</p>
        </button>
        <button
          className={`${Style.filterCard} ${filter.isIntroductory ? Style.active : ""}  ${filter.isIntroductory && Style.selectedFilter}`}
          onClick={() => toggleFilter("isIntroductory")}
        >
          <p className={Style.isIntroductoryText}>導入科目のみ</p>
        </button>
      </div>
    </div>
  );
};

export default Classes;
