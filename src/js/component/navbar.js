import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)


	return (
		<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand starwars-logo mb-0 h1">
					<span>Star Wars</span>
				</Link>
				<div className="btn-group">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
						aria-expanded="false">Favorites ({store.favorites.length})</button>
					<ul className="dropdown-menu dropdown-menu-end">


						{store?.favorites && store?.favorites.length > 0 ? (
							store?.favorites?.map((item, index) => (
								<li key={index} className="dropdown-item d-flex justify-content-between align-items-center">

									<Link
										to={
											item.type === "people"
												? `/detailsCharacters/${item.uid}`
												: item.type === "vehicles"
													? `/detailsVehicles/${item.uid}`
													: item.type === "planets"
														? `/detailsPlanets/${item.uid}`
														: "/not-found" // Ruta por defecto si no coincide con ningún tipo
										}
										className="text-decoration-none text-dark"
										onClick={() => console.log(`Navigating to: ${item.type}, UID: ${item.uid}`)}>
										{item.name}
									</Link>

									<button className="btn btn-sm btn-danger ms-2">
										<i className="fas fa-trash-alt" onClick={() => actions.deleteFavorites(item)}></i>
									</button>
								</li>))

						) : (
							<li className="dropdown-item d-flex justify-content-between align-items-center">
								<p>No favorites added</p></li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
