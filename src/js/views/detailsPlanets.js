import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import starwars from "../../img/starwars.jpeg"

export const DetailsPlanets = () => {
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
		actions.getPlanetsViews(params.id);
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
				<img src={getImageByUid(params.id)} className="img-fluid" alt={planet.name || "Star Wars planet"} onError={(e) => { e.target.src = starwars;}} />
				</div>
				<div className="col-6">
					<h3>{store?.planet?.name}</h3>
					<p>{store?.description} </p>
					<div className="card-body-detalle">
						<div className="detalle">
							<p>Diameter: {store?.planet?.diameter}</p>
						</div>
						<div className="detalle">
							<p>Rotation period: {store?.planet?.rotation_period}</p>
						</div>
						<div className="detalle">
							<p>Orbital period: {store?.planet?.orbital_period}</p>

						</div>
						<div className="detalle">
							<p>Gravity: {store?.planet?.gravity} </p>
						</div>
						<div className="detalle">
							<p>Population: {store?.planet?.population}</p>
						</div>
						<div className="detalle">
							<p>Climate: {store?.planet?.climate} </p>
						</div>
						<div className="detalle">
							<p>Terrain: {store?.planet?.terrain} </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
