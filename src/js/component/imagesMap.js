import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import starwars from "../../img/starwars.jpeg"

const imagesMap ={
    "Luke Skywalker" : "https://starwars-visualguide.com/#/characters/1",
}