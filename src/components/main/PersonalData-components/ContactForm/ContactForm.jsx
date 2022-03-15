import React,{ useState, useContext } from "react";
import './contactForm.css';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../../../firebase';
import { CartContext } from "../../../../context/CartContext";


const ContactForm =  () =>{
    const { cart, amount, emptyCart } = useContext(CartContext)
    const [alreadyBuyIt, setAlreadyBuyIt] = useState(false)
    const [orderNumber, setOrderNumber] = useState('');

    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [dni, setDni] = useState('');
    const [area, setArea] = useState('');
    const [tel, setTel] = useState('');

    const [province, setProvince] = useState('')
    const [city, setCity] = useState('')
    const [CP, setCP] = useState('')
    const [street, setStreet] = useState('')
    const [streetNumber, setStreetNumber] = useState('')
    const [floor, setFloor] = useState('')

    const [cardNumber, setCardNumber] = useState('')
    const [expiration, setExpiration] = useState('')
    const [owner, setOwner] = useState('')
    const [securityNumber, setSecurityNumber] = useState('')
    
    
    
    const clientEmail = e => setEmail(e.target.value);
    const verifyEmail = `${email !== ''  ? 'hiddenSpanWarningForm' : 'showSpanWarningForm'}`;
    
    const clientConfirmEmail = e => setConfirmEmail(e.target.value);
    const verifyEmail2 = `${confirmEmail === email ? 'hiddenSpanWarningForm' : 'showSpanWarningForm'}`;


    const clientName = e => setName(e.target.value);
    const verifyName = `${name.length >= 2  ? 'hiddenSpanWarningForm' : 'showSpanWarningForm'}`;


    const clientLastname = e => setLastname(e.target.value);
    const verifyLastName = `${lastname !== ''  ? 'hiddenSpanWarningForm' : 'showSpanWarningForm'}`;


    const clientDni = e => setDni(e.target.value);
    const verifyDni = `${dni.length >= 6  ? 'hiddenSpanWarningForm' : 'showSpanWarningForm'}`;


    const clientArea = e => setArea(e.target.value);
    const verifyArea = `${area !== ''  ? 'hiddenSpanWarningForm' : 'showSpanWarningForm'}`;


    const clientTel = e => setTel(e.target.value);
    const verifyTel = `${tel.length >= 6  ? 'hiddenSpanWarningForm' : 'showSpanWarningForm'}`;


    const clientProvince = e => setProvince(e.target.value);
    const verifyProvince = `${province.length >= 4  ? 'hiddenSpanWarningForm' : 'showSpanWarningForm'}`;


    const clientCity = e => setCity(e.target.value);
    const verifyCity = `${city.length >= 4  ? 'hiddenSpanWarningForm' : 'showSpanWarningForm'}`;


    const clientCP = e => setCP(e.target.value);
    const verifyCp = `${CP.length >= 3  ? 'hiddenSpanWarningForm' : 'showSpanWarningForm'}`;


    const clientStreet = e => setStreet(e.target.value);
    const verifyStreet = `${street !== ''  ? 'hiddenSpanWarningForm' : 'showSpanWarningForm'}`;


    const clientStreetNumber = e => setStreetNumber(e.target.value);
    const verifyStreetNumber = `${streetNumber !== ''  ? 'hiddenSpanWarningForm' : 'showSpanWarningForm'}`;


    const clientFloor = e => setFloor(e.target.value);

    const clientCardNumber = e => setCardNumber(e.target.value);
    const verifyCardNumber = `${cardNumber.length === 16  ? 'hiddenSpanWarningForm' : 'showSpanWarningForm'}`;

    const clientExpiration = e => setExpiration(e.target.value);
    const verifyExpiration = `${expiration.length === 4  ? 'hiddenSpanWarningForm' : 'showSpanWarningForm'}`;

    const clientOwner = e => setOwner(e.target.value);
    const verifyOwner = `${owner === ''  ? 'showSpanWarningForm' : 'hiddenSpanWarningForm'}`;


    const clientSecurityNumber = e => setSecurityNumber(e.target.value);
    const verifySecurityNumber = `${securityNumber === ''  ? 'showSpanWarningForm' : 'hiddenSpanWarningForm'}`;


    const finishForm = () =>{
        if(![email, name, lastname,dni,area,tel,province,city,CP,street,streetNumber].some(field => field === "")){

            const clientData = collection(db, "orders");
            const orderTime = new Date();
            const orderProducts = cart.map((prod)=>{
                return{
                    name: prod.name,
                    units: prod.units
                }
            })

            const newOrder = {
                order: orderProducts, 
                client:{ 
                email,
                name,
                lastname,
                dni,
                area,
                tel,
                province,
                city,
                CP,
                street,
                streetNumber,
                floor},
                date: orderTime,
                totalPrice: amount
            }


            addDoc(clientData, newOrder)
            .then(doc =>{
                setOrderNumber(doc.id)
            })
            .catch((err)=>{
                console.log(err)
            })
            .finally(()=>{
                setAlreadyBuyIt(true);

            })
        } else{
            alert('Hay valores vacíos!!')
        }
    }

    const ready = (e)=>{
        e.preventDefault()
        finishForm()
    }

    


    return(

        <div className="contactForm-wrapper">
            {
                (alreadyBuyIt)
                ? ( <div>
                        <h1>Felicitaciones! Has realizado la compra exitosamente</h1>
                        <p>Su código de orden es: {orderNumber} </p>
                        <p>En las próximas horas recibirá un email con el detalle y seguimiento de su compra</p>
                    </div>)
                : 
                <form onSubmit={ready}>
                    <h3 className="form-h3">Datos personales</h3>
                    <div className="formPersonalData">
                        <div>
                            <input type='email' value={email} onChange={clientEmail} placeholder="email" className="form-input"/>
                            <span className={verifyEmail}>Por favor, completar este campo</span>
                        </div>
                        <div>
                            <input type='email' value={confirmEmail} onChange={clientConfirmEmail} placeholder="repetir email" className="form-input"/>
                            <span className={verifyEmail2} >Email incorrecto</span>
                        </div>
                        <div>
                            <input type='text' value={name} onChange={clientName} placeholder="nombre/s" className="form-input"/>
                            <span className={verifyName}>Por favor, completar este campo</span>
                        </div>
                        <div>
                            <input type='text' value={lastname} onChange={clientLastname} placeholder="apellido" className="form-input"/>
                            <span className={verifyLastName}>Por favor, completar este campo</span>
                        </div>
                        <div>
                            <input type='text' value={dni} onChange={clientDni} placeholder="dni" className="form-input"/>
                            <span className={verifyDni}>Por favor, completar este campo</span>
                        </div>
                        <div>
                            <input type='text' value={area} onChange={clientArea} placeholder="area" className="form-input"/>
                            <span className={verifyArea}>Por favor, completar este campo</span>
                        </div>
                        <div>
                            <input type='text' value={tel} onChange={clientTel} placeholder="teléfono" className="form-input"/>
                            <span className={verifyTel}>Por favor, completar este campo</span>
                        </div>
                    </div>


                    <h3 className="form-h3">Datos de destino</h3>
                    <div className="formDestinyData">
                        <div>
                            <input type='text' value={province} onChange={clientProvince} placeholder="Provincia" className="form-input"/>
                            <span className={verifyProvince}>Por favor, completar este campo</span>
                        </div>
                        <div>
                            <input type='text' value={city} onChange={clientCity} placeholder="Ciudad" className="form-input"/>
                            <span className={verifyCity}>Por favor, completar este campo</span>
                        </div>
                        <div>
                            <input type='text' value={CP} onChange={clientCP} placeholder="Código postal" className="form-input"/>
                            <span className={verifyCp}>Por favor, completar este campo</span>
                        </div>
                        <div>
                            <input type='text' value={street} onChange={clientStreet} placeholder="Calle" className="form-input"/>
                            <span className={verifyStreet}>Por favor, completar este campo</span>
                        </div>
                        <div>
                            <input type='text' value={streetNumber} onChange={clientStreetNumber} placeholder="Altura" className="form-input"/>
                            <span className={verifyStreetNumber}>Por favor, completar este campo</span>
                        </div>
                        <input type='text' value={floor} onChange={clientFloor} placeholder="Piso" className="form-input"/>
                    </div>
                    <h3 className="form-h3">Forma de Pago</h3>
                    <div className="formPayment">
                        <div className="bankCards">
                            <div className="debit">
                                <span className="debit-span">Debito</span>
                                <input type="radio" name="card" className="debit-input" />
                            </div>
                            <div className="credit">
                                <span className="credit-span">Crédito</span>
                                <input type="radio" name="card" className="credit-input" />
                            </div>
                        </div>
                        <div>
                            <input type='text' value={cardNumber} onChange={clientCardNumber} placeholder="Numero de la tarjeta" className="form-input"/>
                            <span className={verifyCardNumber}>Por favor, completar este campo</span>
                        </div>
                        <div>
                            <input type='text' value={expiration} onChange={clientExpiration} placeholder="vencimiento" className="form-input"/>
                            <span className={verifyExpiration}>Por favor, completar este campo</span>
                        </div>
                        <div>
                            <input type='text' value={owner} onChange={clientOwner} placeholder="titular" className="form-input"/>
                            <span className={verifyOwner}>Por favor, completar este campo</span>
                        </div>
                        <div>
                            <input type='text' value={securityNumber} onChange={clientSecurityNumber} placeholder="Numero de seguridad" className="form-input"/>
                            <span className={verifySecurityNumber}>Por favor, completar este campo</span>
                        </div>
                    </div>
                    <button type="submit" className="finishBuyBtn">Finalizar Compra</button>
                </form>
            }
        </div>


    )
}

export default ContactForm;