import React, { useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Characters = () => {
    const { store, actions } = useContext(Context);

    return (

        <div className="d-flex flex-column p-5 w-100 text-white">
            <h2>Characters</h2>
            <div className="row">
                {Array.isArray(store.characters) && store.characters.map((item, index) => (
                    <div className="col-md-3" key={index}>
                        <Card item={item} type="people" />
                    </div>

                ))}

            </div>
        </div>
    );
}


