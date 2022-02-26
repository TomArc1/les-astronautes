import React from "react";

const DestinyForm = ( {steps} ) =>{

    const walk2 = () =>{
        steps(1)
    }

    return(
        <div>
            <input type='text' placeholder="Provincia"/>
            <input type='text' placeholder="Ciudad"/>
            <input type='text' placeholder="Código postal"/>
            <input type='text' placeholder="Calle"/>
            <input type='text' placeholder="Altura"/>
            <input type='text' placeholder="Piso"/>
            <button onClick={walk2}>Continuar</button>
        </div>
    )
};

export default DestinyForm;