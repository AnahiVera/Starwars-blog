import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Spinner } from "../component/spinner"
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import starwars from "../../img/starwars.jpeg"

export const DetailsCharacters = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const getImageByUid = (uid) => {
		if (!uid) return starwars; // Imagen por defecto si no hay uid
		const typeMapping = {
			people: `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`,
		};
		return typeMapping["people"] || starwars; // Imagen por defecto para tipos no válidos
	};

	useEffect(() => {
		actions.getCharacterViews(params.id);
	}, [params.id, actions]);

	const character = store.character; // Facilita el acceso a los datos del personaje

	if (!character) {
		return <Spinner/>
	}

	return (
		<div className="vh-75 d-flex justify-content-center mt-4 text-white">
			<div className="row w-100">
				<div className="col-6 justify-content-center align-items-center ">
					<img src={getImageByUid(params.id)} className="img-fluid" alt={character.name || "Star Wars character"} onError={(e) => { e.target.src = starwars;}} />
				</div>
				<div className="col-6">
					<h3>{store?.character?.name}</h3>
					<p>{store?.description} </p>
					<div className="card-body-detalle">
						<div className="detalle">
							<p>Birthday: {store?.character?.birth_year}</p>
						</div>
						<div className="detalle">
							<p>Gender: {store?.character?.gender}</p>
						</div>
						<div className="detalle">
							<p>Height(cm): {store?.character?.height}</p>
							<p></p>
						</div>
						<div className="detalle">
							<p>Weight(kg): {store?.character?.mass} </p>
						</div>
						<div className="detalle">
							<p>Eye color: {store?.character?.eye_color}</p>
						</div>
						<div className="detalle">
							<p>Hair color: {store?.character?.hair_color} </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
