
import malbecImg from '../assets/imgs/malbecimg.png';
import torrontesImg from '../assets/imgs/vinotorrontes.jpeg';
import cabernetImg from '../assets/imgs/cabernetimg.jpeg';
import merlotImg from '../assets/imgs/merlotimg.jpeg';
import chardonnayImg from '../assets/imgs/chardonnayimg.webp';
import syrahImg from '../assets/imgs/syrahimg.png';
import cabernetblancImg from '../assets/imgs/sauvignonblancimg.jpeg';
import pinotImg from '../assets/imgs/pinotimg.jpeg';




const catalogo = [
    {
        id:101,
        name: 'Mercurio',
        blend: 'Malbec',
        category: 'tinto',
        description: 'Vino tinto malbec 750ml.',
        description2: 'Vino tinto malbec 750ml. Cosecha 2021, Valle de Uco, Mendoza.',
        price: 850,
        img: malbecImg
    },
    {
        id:102,
        name: 'Venus',
        blend: 'Torrontes',
        category: 'blanco',
        description: 'Vino blanco torrontes 750ml.',
        description2: 'Vino tinto malbec 750ml. Cosecha 2021, Valle de Uco, Mendoza.',
        price: 850,
        img: torrontesImg
    },
    {
        id:103,
        name: 'Tierra',
        blend: 'Cavernet Souvignon',
        category: 'tinto',
        description: 'Vino tinton cabernet souvignon 750ml.',
        description2: 'Vino tinto malbec 750ml. Cosecha 2021, Valle de Uco, Mendoza.',
        price: 850,
        img: cabernetImg
    },
    {
        id:104,
        name: 'Marte',
        blend: 'Merlot',
        category: 'tinto',
        description: 'Vino tinton cabernet souvignon 750ml.',
        description2: 'Vino tinto malbec 750ml. Cosecha 2021, Valle de Uco, Mendoza.',
        price: 850,
        img: merlotImg
    },
    {
        id:105,
        name: 'Júpiter',
        blend: 'Chardonnay',
        category: 'blanco',
        description: 'Vino tinton cabernet souvignon 750ml.',
        description2: 'Vino tinto malbec 750ml. Cosecha 2021, Valle de Uco, Mendoza.',
        price: 850,
        img: chardonnayImg
    },
    {
        id:106,
        name: 'Saturno',
        blend: 'Syrah',
        category: 'tinto',
        description: 'Vino tinton cabernet souvignon 750ml.',
        description2: 'Vino tinto malbec 750ml. Cosecha 2021, Valle de Uco, Mendoza.',
        price: 850,
        img: syrahImg
    },
    {
        id:107,
        name: 'Urano',
        blend: 'Sauvignon Blanc',
        category: 'blanco',
        description: 'Vino tinton cabernet souvignon 750ml.',
        description2: 'Vino tinto malbec 750ml. Cosecha 2021, Valle de Uco, Mendoza.',
        price: 850,
        img: cabernetblancImg
    },
    {
        id:108,
        name: 'Neptuno',
        blend: 'Pinot Noir',
        category: 'tinto',
        description: 'Vino tinton cabernet souvignon 750ml.',
        description2: 'Vino tinto malbec 750ml. Cosecha 2021, Valle de Uco, Mendoza.',
        price: 850,
        img: pinotImg
    },
];


const getItems = new Promise ((res, rej)=>{
    setTimeout(()=>{
        res(catalogo)
    }, 500)
});

export default getItems;
