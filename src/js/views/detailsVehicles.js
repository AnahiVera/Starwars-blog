import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Spinner } from "../component/spinner"
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import starwars from "../../img/starwars.png"


export const DetailsVehicles = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const getImageByUid = (uid) => {
		if (!uid) return starwars; // Imagen por defecto si no hay uid
		const typeMapping = {
			vehicles: `https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`,
		};
		return typeMapping["vehicles"] || starwars; // Imagen por defecto para tipos no válidos
	};

	useEffect(() => {
		actions.getVehiclesViews(params.id);
	}, [params.id, actions]);

	const vehicle = store?.vehicle; // Facilita el acceso a los datos 
	if (!vehicle) {
		return <Spinner/>
	}


	return (
		<div className="vh-75 d-flex justify-content-center mt-4 text-white">
			<div className="row w-100">
				<div className="col-12 col-md-5 ">
				<img src={getImageByUid(params.id)} className="img-fluid card-body-detalle" alt={vehicle.name || "Star Wars Vehicle"} onError={(e) => { e.target.src = starwars;}} />
				</div>
				<div className="col-12 col-md-5">
					<h3>{store?.vehicle?.name}</h3>
					
					<div className="card-body-detalle p-3">
						<div className="detalle">
							<p>Model: {store?.vehicle?.model}</p>
						</div>
						<div className="detalle">
							<p>Class: {store?.vehicle?.vehicle_class}</p>
						</div>
						<div className="detalle">
							<p>Manufacturer: {store?.vehicle?.manufacturer}</p>

						</div>
						<div className="detalle">
							<p>Cost (credits): {store?.vehicle?.cost_in_credits} </p>
						</div>
						<div className="detalle">
							<p>Length: {store?.vehicle?.length}</p>
						</div>
						<div className="detalle">
							<p>Crew: {store?.vehicle?.crew} </p>
						</div>
						<div className="detalle">
							<p>Passengers: {store?.vehicle?.passengers} </p>
						</div>
						<div className="detalle">
							<p>Max Speed in atmosphere: {store?.vehicle?.max_atmosphering_speed} </p>
						</div>
						<div className="detalle">
							<p>Cargo capacity: {store?.vehicle?.cargo_capacity} </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
