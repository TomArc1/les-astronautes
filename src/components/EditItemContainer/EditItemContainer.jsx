import React, { useEffect, useState } from "react";
import './EditItemContainer.css';
import { addDoc, collection, getDoc, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, uploadBytes, ref } from 'firebase/storage';
import { db } from "../../firebase";
import { useParams } from "react-router-dom";


const EditItemContainer = () =>{

    const { id } = useParams();
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


    useEffect(()=>{
        const docRef = doc(db, "catalogue", id)
        getDoc(docRef)
        .then(doc =>{
            const document = doc.data();
            setName(document.name);
            setBlend(document.blend);
            setCategory(document.category);
            setDescription(document.description);
            setDescription2(document.description2);
            setPrice(document.price);
            setStock(document.stock);
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [id])



    const sendFormforUpdate = /*async*/ e =>{
        e.preventDefault();

        const docRef = doc (db, "catalogue", id)
        
        const updateItem = {
                name,
                blend,
                category,
                description,
                description2,
                price,
                stock
            }

            updateDoc(docRef, updateItem)
            .then(()=> console.log('Producto Actualizado'))
            .catch((err)=>{
                console.log(err)
            })

    }

    return(
        <div className="form-wrapp">
            <h1>Editar Producto</h1>
            <form onSubmit={sendFormforUpdate}>
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

export default EditItemContainer;