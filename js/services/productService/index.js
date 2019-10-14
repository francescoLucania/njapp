
const productData = [

    {
        id: '001',
        type: 'audio',
        title: 'mdn',
        image: 'https://sun9-38.userapi.com/c856120/v856120774/1151ee/I3O81x7aXYE.jpg',
        link: '/#',
        date: '08.10.2019'
    },

    {
        id: '002',
        type: 'audio',
        title: 'mdn',
        image: 'https://sun9-38.userapi.com/c856120/v856120774/1151ee/I3O81x7aXYE.jpg',
        link: '/#',
        date: '08.10.2019'
    },

    {
        id: '003',
        type: 'audio',
        title: 'mdn',
        image: 'https://sun9-38.userapi.com/c856120/v856120774/1151ee/I3O81x7aXYE.jpg',
        link: '/#',
        date: '08.10.2019'
    },

];
export const ProductService = new class {
    constructor() {
        console.log('init product service')
    }

    getAll() {
        return productData;
    }

    getOne(productId) {
        console.log(productId);
    }
};