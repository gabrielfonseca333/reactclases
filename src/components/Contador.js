import { Component } from "react";

//Podemos declarar métodos fuera de la clase, dichos metodos no pueden utilizar nada del Component y se declaran con function
function metodoExterno(){
    console.log("Function externa a la clase");

}

class Contador extends Component {

    //las variables y los metodos se declaran fuera del render y no se utilizan palabaras claves como var, let o const
    numero = 1;
    
    //los metodos se declaran directamente aquí 
    incrementarNumero=()=>{
        //para poder acceder a las variables de la clase, debemos utilizar la palabra clave, this
        this.numero = this.numero+1;
        console.log("Valor del numero: " + this.numero);
    }

    //vamos a declarar una variable de estado qeu etendrá el valor de props
    state = {
        valor:parseInt(this.props.inicio)
    }

    //creamos un metodo para cambiar el state
    incrementarValorState =()=>{
        //para modificar los elementos que tengamos dentro de state, se utilza setState con un JSON del objeto con las variables que deseemos modificar
        //las variables que no modifiquemos no van a cambiar
        this.setState({
            valor:this.state.valor + 1
        });
    }

    render(){
        return (
            <div>
                <h1>Contador 2.0</h1>
                <h2 style={{color:"lightcoral"}}>
                    Inicio del contador: {this.props.inicio}
                </h2>
                <h2 style={{color:"aqua"}}>
                    Valor del state: {this.state.valor}
                </h2>
                {/* La llamada a los metodos es mas sencillo y no se necesita parentesis */}
                <button onClick={this.incrementarValorState}>Incrementar State</button> 
                {/* no se ponen los parentesis pq se haria un bucle infinito de llamada */}
                {/* VAMOS A UTILZIAR UNA FUNCTION ANONIMA PARA LLAMAR A UN METODO */}

                <button onClick={()=>{

                    //si deseamos llamar al metodo utilziamos la variable this
                    this.incrementarNumero();
                    //para llamara  un metodo externo del component, no utilizamos this
                    metodoExterno();

                }}>
                    Sumar
                </button>

            </div>
        )
    }
}

export default Contador;