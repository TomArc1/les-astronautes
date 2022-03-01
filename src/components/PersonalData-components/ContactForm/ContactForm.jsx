import React,{ useState, useContext } from "react";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from '../../../firebase';
import { CartContext } from "../../../context/CartContext";
import { FirebaseError } from "firebase/app";


const ContactForm =  () =>{
    const { cart, amount } = useContext(CartContext)
    const [alreadyBuyIt, setAlreadyBuyIt] = useState(false)
    const [orderNumber, setOrderNumber] = useState('');

    const [email, setEmail] = useState('');
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
    const clientName = e => setName(e.target.value);
    const clientLastname = e => setLastname(e.target.value);
    const clientDni = e => setDni(e.target.value);
    const clientArea = e => setArea(e.target.value);
    const clientTel = e => setTel(e.target.value);
    const clientProvince = e => setProvince(e.target.value);
    const clientCity = e => setCity(e.target.value);
    const clientCP = e => setCP(e.target.value);
    const clientStreet = e => setStreet(e.target.value);
    const clientStreetNumber = e => setStreetNumber(e.target.value);
    const clientFloor = e => setFloor(e.target.value);
    const clientCardNumber = e => setCardNumber(e.target.value);
    const clientExpiration = e => setExpiration(e.target.value);
    const clientOwner = e => setOwner(e.target.value);
    const clientSecurityNumber = e => setSecurityNumber(e.target.value);


    const finishForm = () =>{
        if(![email, name, lastname,dni,area,tel,province,city,CP,street,streetNumber,floor].some(field => field === "")){

            const clientData = collection(db, "orders");

            const newOrder = {
                ...cart, 
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
                floor,
                date: (+ new Date()).toString(36),
                totalPrice: amount
            }


            addDoc(clientData, newOrder)
            .then(doc =>{
                console.log('se guardó correctamente el documento', doc.id)
                setOrderNumber(doc.id)
            })
            .catch((err)=>{
                console.log(err)
            })
            .finally(()=>{
                setAlreadyBuyIt(true)
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


        <div>
            {
                (alreadyBuyIt)
                ? ( <div>
                        <h1>Felicitaciones! Has realizado la compra exitosamente</h1>
                        <p>Su código de orden es: {orderNumber} </p>
                        <p>En las próximas horas recibirá un email con el detalle y seguimiento de su compra</p>
                    </div>)
                : 
                <form onSubmit={ready}>
                    <input type='email' value={email} onChange={clientEmail} placeholder="email"/>
                    <input type='text' value={name} onChange={clientName} placeholder="nombre"/>
                    <input type='text' value={lastname} onChange={clientLastname} placeholder="apellido"/>
                    <input type='text' value={dni} onChange={clientDni} placeholder="dni"/>
                    <input type='text' value={area} onChange={clientArea} placeholder="area"/>
                    <input type='text' value={tel} onChange={clientTel} placeholder="teléfono"/>
                    <input type='text' value={province} onChange={clientProvince} placeholder="Provincia"/>
                    <input type='text' value={city} onChange={clientCity} placeholder="Ciudad"/>
                    <input type='text' value={CP} onChange={clientCP} placeholder="Código postal"/>
                    <input type='text' value={street} onChange={clientStreet} placeholder="Calle"/>
                    <input type='text' value={streetNumber} onChange={clientStreetNumber} placeholder="Altura"/>
                    <input type='text' value={floor} onChange={clientFloor} placeholder="Piso"/>
                    <span>Debito</span>
                    <input type="radio" name="card" />
                    <span>Crédito</span>
                    <input type="radio" name="card" />
                    <input type='text' value={cardNumber} onChange={clientCardNumber} placeholder="Numero de la tarjeta"/>
                    <input type='text' value={expiration} onChange={clientExpiration} placeholder="vencimiento"/>
                    <input type='text' value={owner} onChange={clientOwner} placeholder="titular"/>
                    <input type='text' value={securityNumber} onChange={clientSecurityNumber} placeholder="Numero de seguridad"/>
                    <button type="submit">Finalizar Comprar</button>
                </form>
            }
        </div>


    )
}

export default ContactForm;