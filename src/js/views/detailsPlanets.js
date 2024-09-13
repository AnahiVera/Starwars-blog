import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import starwars from "../../img/starwars.jpeg"

export const DetailsPlanets = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();


	useEffect(() => {
		actions.getPlanetsViews(params.id);
	}, [params.id]);

	return (
		<div className="vh-75 d-flex justify-content-center mt-4 text-white">
			<div className="row w-100">
				<div className="col-6 justify-content-center align-items-center ">
					<img src={starwars} className="" alt="character image" />
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
