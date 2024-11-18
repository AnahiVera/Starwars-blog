import React, { useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Vehicles = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="d-flex flex-column p-5 w-100 text-white">
            <h2>Vehicles</h2>
            <div className="row">
                {Array.isArray(store.vehicles) && store.vehicles.map((item, index) => (
                    <div className="col-md-3  my-4" key={index}>
                        <Card item={item} type="vehicles"/>
                    </div>
                ))}
            </div>
        </div>
    );
}
