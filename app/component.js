import $ from "jquery";
import pokedex from "./pokedex.js";
class Pokemon {
	constructor(pokeid=1){
		$.get(`http://pokeapi.co/api/v2/pokemon/${pokeid}`)
			.done(data => this.handleData(data))
			.fail(this.handleError)
		this.id = pokeid;
		return this.main = document.createElement("div");
	}
	handleData(data){
		this.main.id = this.id;
		this.name = this.main.name = data.name;
		this.main.className = "pokemon";
		this.data = data;
		this.createPokemon(data);
	}
	handleError(err){
		console.log("there was a problem with get request", err);
	}

	createPokemon(data){
		let header = document.createElement("h3");
		header.innerHTML = data.name;
		this.main.appendChild(header);
		let image = document.createElement("img");
		image.src = data.sprites.front_shiny;
		this.main.appendChild(image);
		this.main.addEventListener('click',e => this.onClick(e));
	}
	onClick(e){
		pokedex(this.name, this.data);
	}
}

export default function (pokeid) {
	return new Pokemon(pokeid);
}