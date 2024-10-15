import { Component } from "react";

class Comic extends Component{

    

    render(){
        return(
            <div style={{border:"solid 1px blue"}}>
                <h2>{this.props.comic.titulo}</h2>
                <p>{this.props.comic.descripcion}</p>
                <img src={this.props.comic.imagen} style={{width:"250px"}}/>
                <br></br>
                <button>
                    Seleccionar
                </button>
                <button>
                    Eliminar
                </button>
            </div>
        )
    }

}

export default Comic;