export default {
    cart : {
        list: {
            products: []
        },
        total:{
            Items: 0,
            Price:0,
            OfferedPrice:0
        }
    },
    products:{
        list: [],
        category_list: [],
        sorting: 0,
        filter:[100,1000],
        range:[100,1000],
        filterList:[]
    },
    search:{
        products: {
            all: 0,
            list: [],
            page: 1,
            total_pages: 1,
        },
        services: {
            all: 0,
            list: [],
            page: 1,
            total_pages: 1,
        },
        filters: {
            min_price: 100,
            max_price: 1000,
        },
        type: 'alls',
        query: '',
        autocomplete: {
            product: [],
            service: []
        },
        autocompleteSalon: []
    }
}