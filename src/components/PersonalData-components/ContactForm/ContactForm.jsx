import React from "react";

const ContactForm = ( {steps} ) =>{
    
    const walk = () =>{
        steps(1)
    }

    return(
        <div>
            <input type='text' placeholder="email"/>
            <input type='text' placeholder="nombre"/>
            <input type='text' placeholder="apellido"/>
            <input type='text' placeholder="dni"/>
            <input type='text' placeholder="area"/>
            <input type='text' placeholder="teléfono"/>
            <button onClick={walk}>Continuar</button>
        </div>


    )
}

export default ContactForm;