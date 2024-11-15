const getState = ({ getStore, getActions, setStore }) => {


    return {
        store: {
            baseUrl: "https://www.swapi.tech/api/",
            characters: [],
            vehicles: [],
            planets: [],
            favorites: []

        },
        actions: {
            getCharacter: () => {
                const { baseUrl } = getStore()
                fetch(`${baseUrl}/people/`)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Network response was not ok");
                        }
                        return response.json();
                    })
                    .then((responseJson) => setStore({ characters: responseJson.results }))
                    .catch((error) => console.log("Error fetching:", error));
            },
            getVehicles: () => {
                const { baseUrl } = getStore()
                fetch(`${baseUrl}/vehicles/`)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Network response was not ok");
                        }
                        return response.json();
                    })
                    .then((responseJson) => setStore({ vehicles: responseJson.results }))
                    .catch((error) => console.log("Error fetching:", error));
            },
            getPlanets: () => {
                const { baseUrl } = getStore()
                fetch(`${baseUrl}/planets/`)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Network response was not ok");
                        }
                        return response.json();
                    })
                    .then((responseJson) => setStore({ planets: responseJson.results }))
                    .catch((error) => console.log("Error fetching:", error));
            },
            addFavorites: (item) => {
                const store = getStore()
                const newFavorite = {
                    name: item.name,
                    uid: item.uid,
                    type: item.type, 
                }
                const exists = store.favorites.some(fav => fav.uid === item.uid && fav.type === item.type);
                if (!exists) {
                    setStore({ favorites: [...store.favorites, newFavorite] });
                    console.log("Added to favorites:", newFavorite);
                } else {
                    console.log("Favorite already exists:", newFavorite);
                }
                
            },
            deleteFavorites: (itemFavorito) => {
                const store = getStore()
                setStore({
                    favorites: store.favorites.filter(favorite => favorite !== itemFavorito)
                })
            },
            getCharacterViews: (id) => {
                const url = `https://www.swapi.tech/api/people/${id}`;
                fetch(url)
                    .then(response => response.json())
                    .then(responseJson => {
                        const character = responseJson?.result?.properties;
                        const description = responseJson?.result?.description;
                        setStore({ character, description });  // Store both character properties and description
                    })
                    .catch(error => console.log("Error fetching character details:", error));
            },
            getPlanetsViews: (id) => {
                const url = `https://www.swapi.tech/api/planets/${id}`;
                fetch(url)
                    .then(response => response.json())
                    .then(responseJson => {
                        console.log(responseJson)
                        const planet = responseJson?.result?.properties;
                        const description = responseJson?.result?.description;
                        setStore({ planet, description });  // Store both planets properties and description
                    })
                    .catch(error => console.log("Error fetching character details:", error));
            },
            getVehiclesViews: (id) => {
                const url = `https://www.swapi.tech/api/vehicles/${id}`;
                fetch(url)
                    .then(response => response.json())
                    .then(responseJson => {
                        console.log(responseJson)
                        const vehicle = responseJson?.result?.properties;
                        const description = responseJson?.result?.description;
                        setStore({ vehicle, description });  // Store both vehicles properties and description
                    })
                    .catch(error => console.log("Error fetching character details:", error));
            }
        }
    };
};

export default getState;
