import { Component } from "react";
import HijoDeportes from "./HijoDeportes";

class PadreDeportes extends Component{

    deportes = ["Fútbol", "Basketball", "Tennis", "Ping-Pong", "Natación", "Waterpolo", "Gimnasia"];

    //necesitamos un método para dibujar el deporte hijo, que recibiremos del deporte favorito seleccionado
    mostrarFavorito = (deporteSeleccionado) => {


        //modificamos el deporte favorito de state
        this.setState({
            favorito:deporteSeleccionado
        })

    }

    //creamos una variable state para mostrar el deporte seleccionado
    state = {

        favorito:""

    }

    render(){

        return(
            <div>
                <h1 style={{color:"blue"}}>Padre Deportes</h1>
                <h4>Su deporte favorito es: {this.state.favorito}</h4>
                {
                    //___________________________Codigo React___________________________

                    //Recorremos todos los deportes y dibujamos etiquetas <Hijo> por cada uno
                    this.deportes.map((deporte, index)=>{
                        return (<HijoDeportes key={index} nombre={deporte} mostrarFavorito={this.mostrarFavorito}/>) 
                        //se colca sin parentesis el this.mostrarFavorito pq sino lo ejecutaría
                    })
                }

            </div>
        )


    }

}

export default PadreDeportes;