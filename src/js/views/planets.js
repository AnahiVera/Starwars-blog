import React, { useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Planets = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="d-flex flex-column p-5 w-100 text-white">
            <h2>Planets</h2>
            <div className="row">
                {Array.isArray(store.planets) && store.planets.map((item, index) => (
                    <div className="col-md-3 my-4" key={index}>
                        <Card item={item} type="planets"/>
                    </div>
                ))}
            </div>
        </div>
    )
}
