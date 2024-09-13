import React, { useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import characters from "../../img/characters.jpg";
import vehicles from "../../img/vehicles.jpg";
import planets from "../../img/planets.jpg";
import { Link } from "react-router-dom";



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="container d-flex justify-content-center">
			<div id="carouselExampleCaptions" className="carousel slide d-flex justify-content-center">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to={0}
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to={1}
						aria-label="Slide 2"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to={2}
						aria-label="Slide 3"
					/>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<Link to="/characters"><img src={characters} className="d-block w-100" alt="..." /> </Link>
						<div className="carousel-caption d-none d-md-block">
							<h1>CHARACTERS</h1>

						</div>
					</div>
					<div className="carousel-item">
						<Link to="/vehicles"><img src={vehicles} className="d-block w-100" alt="..." /></Link>
						<div className="carousel-caption d-none d-md-block">
							<h1>VEHICLES</h1>

						</div>
					</div>
					<div className="carousel-item">
						<Link to="/planets"><img src={planets} className="d-block w-100" alt="..." /> </Link>
						<div className="carousel-caption d-none d-md-block">
							<h1>PLANETS</h1>

						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev"
				>
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next"
				>
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="visually-hidden">Next</span>
				</button>
			</div>

		</div>

	);
}


