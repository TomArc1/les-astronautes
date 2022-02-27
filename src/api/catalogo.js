import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";


const getItems = new Promise ((res, rej)=>{
    const itemsCollection = collection(db, 'catalogue');
    getDocs(itemsCollection)
    .then((replica)=>{
        const prods = replica.docs.map((doc)=> ({id: doc.id, ...doc.data() }) );
        res(prods)
    })
    .catch((err)=>{
        console.log(err);
        rej(err)
    })
});


export const getItemsById = (id) =>{
    const targetedItem = doc(db, 'catalogue', id );
    return getDoc(targetedItem)
};


export default getItems;
