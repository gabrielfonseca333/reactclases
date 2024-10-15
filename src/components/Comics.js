import { Component } from "react";
import Comic from "./Comic";

class Comics extends Component{

    render(){
        return(
            <div>
                <h1 style={{color:"red"}}>Soy el Padre COMICS</h1>
                <Comic/>
            </div>
        )
    }

}

export default Comics;