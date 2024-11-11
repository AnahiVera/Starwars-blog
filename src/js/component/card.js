import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import starwars from "../../img/starwars.jpeg"

export const Card = ({ item, type }) => {   /* item puede ser character, vehicle or planet */

	const { store, actions } = useContext(Context)

	const isFavorite = store.favorites.some(favorite => favorite.name === item.name);

	return (
		<div className="card justify-center items-center m-1 w-100 text-black ">
			<img src={starwars} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{item?.name}</h5>

				<button onClick={() => actions.addFavorites(item)} className="btn btn-info m-1">
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


