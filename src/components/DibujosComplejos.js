import { Component } from "react";

class DibujosComplejos extends Component{

    //Vamos a dibujar una lista de numeros en formato HTML utilizando un array con <li>
    dibujarNumeros=()=>{
        //declaramos un array para almacenar el dibujo
        var lista = [];
        //vamos a realizar un bucle para rellenar numeros dinamicos
        for(var i = 1; i<=7; i++){
            var numero = parseInt(Math.random()*100)+1;
            //mediante el metodo push del array iremos rellenado el codigo HTML
            lista.push(<li key={i} >{numero}</li>)
        }
        return lista;
    }

    render(){

        return(
            <div>
                <h1>Dibujos complejos HTML</h1>
                <ul>
                    {this.dibujarNumeros()} 
                    {/* con los parentesis al final le estamos diciendo que se ejecute con el render */}
                </ul>
            </div>
        )

    }

}

export default DibujosComplejos;