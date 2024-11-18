import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import starwars from "../../img/starwars.jpeg"


export const DetailsVehicles = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const getImageByUid = (uid) => {
		if (!uid) return starwars; // Imagen por defecto si no hay uid

		const typeMapping = {
			planets: `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`,
		};
		return typeMapping["planets"] || starwars; // Imagen por defecto para tipos no válidos
	};


	useEffect(() => {
		actions.getVehiclesViews(params.id);
	}, [params.id, actions]);

	const planet = store.planet; // Facilita el acceso a los datos 

	if (!planet) {
		return <div className="spinner-border" role="status">
			<span className="visually-hidden">Loading...</span>
		</div>;
	}


	return (
		<div className="vh-75 d-flex justify-content-center mt-4 text-white">
			<div className="row w-100">
				<div className="col-6 justify-content-center align-items-center ">
					<img src={starwars} className="" alt="character image" />
				</div>
				<div className="col-6">
					<h3>{store?.vehicle?.name}</h3>
					<p>{store?.description} </p>
					<div className="card-body-detalle">
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
