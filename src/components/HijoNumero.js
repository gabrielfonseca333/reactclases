import { Component } from "react";

class HijoNumero extends Component{

    hacerSumitaHijo=()=>{
        
       
        var numero = parseInt(this.props.numero);
        console.log("si? " + numero);
        this.props.sumar(numero);
    }
    

    render(){
        return(
            <div style={{border:"solid 1px red", color:"red"}}>
                <h1>Hijo nº: {this.props.numero}</h1>
                <button onClick={this.hacerSumitaHijo}>Sumar nº: {this.props.numero}</button>
            </div>
        )
    }
}

export default HijoNumero;