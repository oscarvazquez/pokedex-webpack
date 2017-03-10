import component from "./component";
import './main.css';

for(var i = 1; i < 60; i++){
    document.body.appendChild(component(i));
}