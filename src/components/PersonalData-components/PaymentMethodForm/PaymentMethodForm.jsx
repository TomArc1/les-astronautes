import React from "react";

const PaymentMethodForm = () =>{

    return(
        <div>
        <span>Debito</span>
        <input type="radio" name="card" />
        <span>Crédito</span>
        <input type="radio" name="card" />
        <input type='text' placeholder="Numero de la tarjeta"/>
        <input type='text' placeholder="vencimiento"/>
        <input type='text' placeholder="titular"/>
        <input type='text' placeholder="Numero de seguridad"/>
        <button>Finalizar Compra</button>
    </div>
    )
};

export default PaymentMethodForm;