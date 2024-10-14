import { Component } from "react";
import HijoNumero from "./HijoNumero";

class PadreNumeros extends Component {

    //creamos el método sumar
    hacerSuma = (numero) => {


        var suma = this.state.suma + numero;
        console.log(suma)

        this.setState({
            suma: suma

        })

    }


    state = {
        numeros: [],
        
        suma: 0
    }

    //2. vamos a realizar un bucle para rellenarlo con
    generarNumero = () => {


        var numero = parseInt(Math.random() * 100) + 1;

        this.state.numeros.push(numero);
        //actualizar state
        this.setState({
            numeros: this.state.numeros
        })



    }


    render() {
        return (
            <div>
                <h1>Padre Numeros</h1>
                <button onClick={this.generarNumero}>Nuevo Numero</button>
                <h3 style={{ backgroundColor: "yellow" }}>Resultado: {this.state.suma}</h3>
                {
                    //codigo react
                    this.state.numeros.map((numero, index) => {
                        //nunca debe estar vacío debe tener un return
                        return (<HijoNumero key={index} numero={numero} sumar={this.hacerSuma} />)

                    })
                }
            </div>
        )
    }
}

export default PadreNumeros;