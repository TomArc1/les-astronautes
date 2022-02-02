
const catalogo = [
    {
        id:101,
        name: 'Mercurio',
        blend: 'Malbec',
        description: 'Vino tinto malbec 750ml.',
        price: 850,
        img: './assets/imgs/imgvinoprueba.png'
    },
    {
        id:102,
        name: 'Venus',
        blend: 'Torrontes',
        description: 'Vino blanco torrontes 750ml.',
        price: 850,
        img: './assets/imgs/imgvinoprueba.png'
    },
    {
        id:101,
        name: 'Tierra',
        blend: 'Cavernet Souvignon',
        description: 'Vino tinton cabernet souvignon 750ml.',
        price: 850,
        img: './assets/imgs/imgvinoprueba.png'
    }
];


const invocarCatalogo = new Promise ((res, rej)=>{
    setTimeout(()=>{
        res(catalogo)
    }, 3000)
});

export default invocarCatalogo;
