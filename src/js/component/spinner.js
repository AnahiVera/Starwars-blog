import React, { Component, useContext } from "react";

import "../../styles/home.css";


export const Spinner = () => {

    return (
        <div className="d-flex justify-content-center m-5">
            <div className="spinner-border m-5 text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )

}