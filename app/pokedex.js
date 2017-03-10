import "./pokedex.css";

class Pokedex{
    constructor(name, data){
        this.name = name;
        this.image = data.sprites.front_shiny;
        this.types = data.types;
        this.height = data.height;
        this.weight = data.weight;

        this.createPokedex = this.createPokedex.bind(this);
        this.main = document.createElement("div");
        this.createPokedex();
        
    }

    createPokedex(){
        this.main.id = "pokedex";

        this.createImage(this.image, this.main);
        
        this.header(this.name, this.main);

        this.info(this.types, this.weight, this.height, this.main);


        let closeBox = document.createElement("button");
        closeBox.innerText = "X";
        closeBox.addEventListener('click', (e) => this.closePokedex(e));
        this.main.appendChild(closeBox);

        let backgroundDiv = document.createElement("div");
        backgroundDiv.className = "background-div";
        document.body.appendChild(backgroundDiv);
        this.backgroundDiv = backgroundDiv;
        document.body.appendChild(this.main)
    }

    createImage(image, main){
        let imageBox = document.createElement("img");
        imageBox.src = image;
        main.appendChild(imageBox); 
    }
    header(name, main){
        let header = document.createElement("h2");
        header.innerHTML = name;
        main.appendChild(header);        
    }

    info(types, weight, height, main){
        let infoBox = document.createElement('div');
        let heightInfo = document.createElement("h4");
        let typeHeader = document.createElement("h4")
        
        heightInfo.innerHTML = "Height: " + height + " -  Weight: " + weight;
        typeHeader.innerHTML = "Types";
        infoBox.appendChild(heightInfo);
        infoBox.appendChild(typeHeader);
        this.createTypes(types, infoBox);
        
        main.appendChild(infoBox);        
    }

    createTypes(types, infoBox){
        let typeList = document.createElement("ul");
        types.forEach(type => {
            let listItem = document.createElement("li");
            listItem.innerHTML = type.type.name;
            typeList.appendChild(listItem);
        })
        infoBox.appendChild(typeList);        
    }

    closePokedex(e){
        document.body.removeChild(this.main);
        document.body.removeChild(this.backgroundDiv);
    }

}


export default function(name, data){
    return new Pokedex(name, data);
}