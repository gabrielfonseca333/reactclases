import { Component } from "react";

class HijoDeportes extends Component{
    //quiero visualizar el deporte favorito
    seleccionarFavorito =()=>{
        //capturamos el deporte seleccionado en props
        var deporte = this.props.nombre;
        //realizamos la llamada al padre enviando el deporte
        this.props.mostrarFavorito(deporte);

    }

    render(){

        return(
            <div style={{border:"solid 1px red"}}>
                <h1 style={{color:"red"}}>{this.props.nombre}</h1>

                <button onClick={this.seleccionarFavorito}>
                    Seleccionar favorito
                </button>
            </div>
        )


    }

}

export default HijoDeportes;