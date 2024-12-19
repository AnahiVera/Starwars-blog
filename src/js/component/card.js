import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import starwars from "../../img/starwars.png"

export const Card = ({ item, type }) => {   /* item puede ser character, vehicle or planet */

	const { store, actions } = useContext(Context)

	const isFavorite = store.favorites.some(favorite => favorite.name === item.name);

	const getImageByUid = (uid) => {
		if (!uid) return starwars; // Imagen por defecto si no hay uid

		const typeMapping = {
			people: `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`,
			vehicles: `https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`,
			planets: `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`
		};

		return typeMapping[type] || starwars; // Imagen por defecto para tipos no válidos
	};


	return (
			<div className="card items-center w-100 text-black h-100 ">
				<img src={getImageByUid(item.uid)} className="card-img " alt={item.name} onError={(e) => { e.target.src = starwars; }} />
				<div className="card-img-overlay">
					<h5 className="card-title ">{item?.name}</h5>
					<button
						onClick={() => {
							const newItem = { ...item, type };
							actions.addFavorites(newItem);
							console.log("Adding to favorites:", newItem);
						}}
						className="btn btn-info m-1 ">
						<i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
					</button>
					{
						type === "people" && (
							<Link to={"/detailsCharacters/" + item.uid} className="btn btn-primary ">Learn more!</Link>
						)
					}
					{
						type === "vehicles" && (
							<Link to={"/detailsVehicles/" + item.uid} className="btn btn-primary ">Learn more!</Link>
						)
					}
					{
						type === "planets" && (
							<Link to={"/detailsPlanets/" + item.uid} className="btn btn-primary ">Learn more!</Link>
						)
					}

				</div>
			</div>
	);
}


