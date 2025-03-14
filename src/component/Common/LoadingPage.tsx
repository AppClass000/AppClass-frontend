import React from  "react";
import Style from "./LoadingPage.module.css";

export const LoadingPage:React.FC =() => {
    return (
        <div className={Style.loadingPageContainer}>
            <h1>Loading...</h1>
            <hr />
        </div>
    )
}

