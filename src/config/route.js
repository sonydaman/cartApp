export default {
    'public': [
        {
            'path': '/',
            'component': 'Landing'
        },
        {
            'path': 'dashboard',
            'component': 'Landing'
        },
        {
            'path': '/cart',
            'component': 'Cart'
        },
        {
            'path': '*',
            'component': 'NotFound'
        }
    ]
}