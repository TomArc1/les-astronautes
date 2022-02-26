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
    let product
    new Promise ((res, rej)=>{
        const targetedItem = doc(db, 'catalogue', id );
        getDoc(targetedItem)
        .then((replica) =>{
            if(replica.exists()){
                product = ({ id: replica.id, ...replica.data()});
                console.log(product)
                res(product);
                }
            })
        .catch((err)=>{
            console.log(err);
            rej(err);
        })
    })
    // return product ??? 
};


export default getItems;
