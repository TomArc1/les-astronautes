import React, { useState } from "react";
import './NewItemContainer.css';
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, getStorage, uploadBytes, ref } from 'firebase/storage';
import { db } from "../../firebase";


const NewItemContainer = () =>{
    const [name, setName] = useState('');
    const [blend, setBlend] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [description2, setDescription2] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [image, setImage] = useState();

    const createName = e => setName(e.target.value);
    const createBlend = e => setBlend(e.target.value);
    const createCategory = e => setCategory(e.target.value);
    const createDescription = e => setDescription(e.target.value);
    const createDescription2 = e => setDescription2(e.target.value);
    const createPrice = e => setPrice(e.target.value);
    const createStock = e => setStock(e.target.value);
    const createImage = e => setImage(e.target.files[0]);

    const verify1 = `${name === ''  ? 'spanWarning' : 'dsp-none'}`;
    const verify2 = `${blend === ''  ? 'spanWarning' : 'dsp-none'}`;
    const verify3 = `${category === ''  ? 'spanWarning' : 'dsp-none'}`;
    const verify4 = `${description === ''  ? 'spanWarning' : 'dsp-none'}`;
    const verify5 = `${description2 === ''  ? 'spanWarning' : 'dsp-none'}`;
    const verify6 = `${price === 0  ? 'spanWarning' : 'dsp-none'}`;
    const verify7 = `${stock === 0  ? 'spanWarning' : 'dsp-none'}`;


    const sendForm = /*async*/ e =>{
        e.preventDefault();
        if(![name, blend, category,description,description2,price,stock].some(field => field === "")){

            // let img = "";
            const itemCollection = collection(db, "catalogue");

            // if (typeof image !== "undefined"){
            //     const storage = getStorage();
            //     const imageName = (+ new Date().toString(36));
            //     const storageRef = ref(storage, `catalogue/${imageName}`);

            //     const uploadTask = await uploadBytes(storageRef, image);
            //     img = await getDownloadURL(uploadTask.ref) 
            // }


            const newItem = {
                name,
                blend,
                category,
                description,
                description2,
                price,
                stock,
                // img
            }


            addDoc(itemCollection, newItem)
            .then(doc =>{
                console.log('se guardó correctamente el documento', doc.id)
            })
            .catch((err)=>{
                console.log(err)
            })

        } else{
            alert('Hay valores vacíos!!')
        }
    }

    return(
        <div className="form-wrapp">
            <h1>Agregar Producto Nuevo</h1>
            <form onSubmit={sendForm}>
                <div className="input-box">
                    <span>Nombre del Producto</span>
                    <input value={name} onChange={createName} type='text' />
                    <span className={verify1}>Por favor, rellenar este campo</span>
                </div>
                <div className="input-box">
                    <span>Blend</span>
                    <input value={blend} onChange={createBlend} name='title' type='text' />
                    <span className={verify2}>Por favor, rellenar este campo</span>
                </div>
                <div className="input-box">
                    <span>Categoría</span>
                    <input value={category} onChange={createCategory} name='title' type='text' />
                    <span className={verify3}>Por favor, rellenar este campo</span>
                </div>
                <div className="input-box">
                    <span>Descripción</span>
                    <input value={description} onChange={createDescription} name='title' type='text' />
                    <span className={verify4}>Por favor, rellenar este campo</span>
                </div>
                <div className="input-box">
                    <span>Descripción 2</span>
                    <input value={description2} onChange={createDescription2} name='title' type='text' />
                    <span className={verify5}>Por favor, rellenar este campo</span>
                </div>
                <div className="input-box">
                    <span>Precio</span>
                    <input value={price} onChange={createPrice} name='title' type='text' />
                    <span className={verify6}>Por favor, rellenar este campo</span>
                </div>
                <div className="input-box">
                    <span>Stock</span>
                    <input value={stock} onChange={createStock} name='title' type='text' />
                    <span className={verify7}>Por favor, rellenar este campo</span>
                </div>
                <div className="input-box">
                    <span>Imagen</span>
                    <input onChange={createImage} name='file' type='file' />
                </div>
                <button type="submit">Agregar producto</button>
            </form>
        </div>

    )
};

export default NewItemContainer;