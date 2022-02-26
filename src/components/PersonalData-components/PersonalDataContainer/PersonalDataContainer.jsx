import React, { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import PaymentMethodForm from "../PaymentMethodForm/PaymentMethodForm";
import DestinyForm from "../DestinyForm/DestinyForm";

const PersonalDataContainer = () =>{
    const [steps, setSteps] = useState(1);

    const walking = (a)=>{
        setSteps(steps + a);
    }

    return(
        <div>
            {
                steps === 1 
                ? <ContactForm steps={walking}/>
                : null
            }
            {
                steps === 2
                ? <DestinyForm steps={walking}/>
                : null
            }
            {
                steps === 3
                ? <PaymentMethodForm steps={walking}/>
                : null 
            }

        </div>
    )
}

export default PersonalDataContainer;