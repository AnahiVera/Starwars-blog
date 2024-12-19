import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Characters } from "./views/characters";
import { Vehicles } from "./views/vehicles";
import { Planets } from "./views/planets";
import { DetailsCharacters } from "./views/detailsCharacters";
import { DetailsPlanets } from "./views/detailsPlanets";
import { DetailsVehicles } from "./views/detailsVehicles";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/detailsCharacters/:id" element={<DetailsCharacters />} />
						<Route path="/detailsVehicles/:id" element={<DetailsVehicles />} />
						<Route path="/detailsPlanets/:id" element={<DetailsPlanets />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/vehicles" element={<Vehicles />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
