const images = [
    require('../assets/images/spaguetti.jpg'),
    require('../assets/images/vegetarian_pie.jpg'),
    require('../assets/images/vegetarian_toast.jpg'),
];

const data = [
    {
        title: 'Spaguetti',
        src: images[0],
        recipe :{
            diners : 3,
            ingredients : [
                {
                    name: 'lean ground meat like beef',
                    cant: '1 pound'
                },
                {
                    name: 'olive oil',
                    cant: '3 tbsp'
                },
                {
                    name: 'chopped onion',
                    cant: '1 cup'
                },
                {
                    name: 'garlic cloves',
                    cant: '3'
                },
                {
                    name: 'tomato paste',
                    cant: '2 tbsp'
                },
                {
                    name: 'dried oregano',
                    cant: '1/2 teaspoon'
                },
                {
                    name: 'red pepper flakes',
                    cant: '1 Pinch crushed'
                },
                {
                    name: 'dry red wine',
                    cant: '1 cup'
                },
                {
                    name: 'crushed tomatoes',
                    cant: '1 can'
                },
                {
                    name: 'Salt and fresh ground black pepper',
                    cant: ''
                },
                {
                    name: 'dried spaghetti',
                    cant: '12 ounces'
                },
                {
                    name: 'shredded parmesan cheese',
                    cant: '1/2 cup'
                },
            ]
        },
    },
    {
        title: 'Vegetarian Pie',
        src: images[1],
        recipe :{
            diners : 3,
            ingredients : [
                {
                    name: 'ricotta',
                    cant: '300g'
                },
                {
                    name: 'chard',
                    cant: '500g'
                },
                {
                    name: 'olive oil',
                    cant: '2 tbsp'
                },
                {
                    name: 'leek',
                    cant: '1/2'
                },
                {
                    name: 'onion',
                    cant: '1'
                },
                {
                    name: 'finely chopped cloves garlic',
                    cant: '2'
                },
                {
                    name: 'green chilli',
                    cant: '1'
                },
                {
                    name: 'preserved lemon',
                    cant: '2 slices'
                },
                {
                    name: 'lemon',
                    cant: '1'
                },
                {
                    name: 'eggs',
                    cant: '3'
                },
                {
                    name: 'feta',
                    cant: '300g'
                },
            ]
        },
    },
    {
        title: 'Vegetarian Toast',
        src: images[2],
        recipe :{
            diners : 3,
            ingredients : [
                {
                    name: 'toasted baguette',
                    cant: '2 pieces'
                },
                {
                    name: 'Fresh Pea Hummus',
                    cant: '1/3 cup'
                },
                {
                    name: 'avocado',
                    cant: '1/2'
                },
                {
                    name: 'tomato',
                    cant: '4 slices'
                },
                {
                    name: 'curly kale',
                    cant: '1 cup'
                },
                {
                    name: 'shredded carrots',
                    cant: 'shredded carrots'
                },
                {
                    name: 'thinly sliced shallots',
                    cant: '2 tbsp'
                },
                {
                    name: 'olive oil',
                    cant: '2 tbsp'
                },
            ]
        },
    },
];

export default data;