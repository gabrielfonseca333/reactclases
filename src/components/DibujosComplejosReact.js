import { Component } from "react";

class DibujosComplejosReact extends Component{


    //en state tendremos un conjunto de nombres
    state = {
        nombres:["Paco", "Pedro", "Lourdes", "Ana", "Fabian", "Javier"]
    }

    generarNombre=()=>{

        this.state.nombres.push("NUEVO NOMBRE");
        //Actualizamos state (IMPORTANTE)
        this.setState({
            nombres:this.state.nombres
        })


    }

    render(){

        return(
            <div>
                <h1>Dibujos Complejos React</h1>
                <button onClick={() => this.generarNombre() }>
                    Generar nombre
                </button>
                {
                    //______________________ IMPORTANTE ________________
                    //Esto es codigo react, es diferente a JS
                    //Es codigo lógico con sintaxis JSX
                    //El código lógico debe contener un return
                    this.state.nombres.map((name, index)=>{
                        //este codigo nunca debe estar vacio, siempre tiene que contener un return
                        return (<h1 key={index} style={{color:"blueviolet"}}>{name}</h1>)
                    })
                }
            </div>
        )
    }

}

export default DibujosComplejosReact;