const images = [
    require('../assets/images/avocado_toast.jpg'),
    require('../assets/images/banderilla.jpg'),
    require('../assets/images/hotcakes.jpg'),
    require('../assets/images/nodles.jpg'),
    require('../assets/images/fish.jpg'),
    require('../assets/images/ham_snacks.jpg'),
    require('../assets/images/pasta.jpg'),
    require('../assets/images/pizza.jpg'),
    require('../assets/images/spaguetti.jpg'),
    require('../assets/images/vegetarian_pie.jpg'),
    require('../assets/images/vegetarian_toast.jpg'),
];

const data = [
    {
        title: 'Avocado Toast',
        src: images[0],
        recipe : {
            diners : 4,
            ingredients : [
                {
                    name: 'small avocado',
                    cant : '1/2'
                },
                {
                    name: 'Kosher salt',
                    cant : '1/8'
                },
                {
                    name: 'ground black pepper',
                    cant : '1/8'
                },
                {
                    name: 'slice whole grain bread, toasted',
                    cant : '1 oz.'
                },
                {
                    name: 'extra-virgin olive oil',
                    cant : '1/2'
                },
            ]
        },
    },
    {
        title: 'Banderilla',
        src: images[1],
        recipe :{
            diners : 24,
            ingredients : [
                {
                    name: 'round toothpicks',
                    cant: '1 box'
                },
                { 
                    name: 'gherkin pickles',
                    cant: '1 jar'
                },
                { 
                    name: 'cocktail onions',
                    cant: '1 jar'
                },
                { 
                    name: 'green olives',
                    cant: '1 jar'
                },
                { 
                    name: 'anchovies',
                    cant: '1 can'
                },
                { 
                    name: 'chunk white tuna (in oil)',
                    cant: '1 can'
                },
                { 
                    name: 'artichoke hearts',
                    cant: '1 can'
                },
                { 
                    name: 'quail eggs (boiled)',
                    cant: '12'
                },
            ]
        },
    },
    {
        title: 'Hot Cakes',
        src: images[2],
        recipe :{
            diners : 3,
            ingredients : [
                {
                    name: 'cup cornmeal',
                    cant: '1/2'
                },
                {
                    name: 'tablespoon sugar',
                    cant: '1'
                },
                {
                    name: 'salt',
                    cant: '1/2'
                },
                {
                    name: 'cup boiling water',
                    cant: '1'
                },
                {
                    name: 'eggs, separated',
                    cant: '2'
                },
                {
                    name: 'cup flour',
                    cant: '1'
                },
                {
                    name: 'tablespoon baking powder',
                    cant: '1'
                },
                {
                    name: 'cup milk',
                    cant: '1'
                },
                {
                    name: 'cup peanut',
                    cant: '1/4'
                },
            ]
        },
    },
    {
        title: 'Nodles',
        src: images[3],
        recipe :{
            diners : 3,
            ingredients : [
                {
                    name: 'teriyaki sauce',
                    cant: '3 tbsp'
                },
                {
                    name: 'Chinese five-spice powder',
                    cant: '1/2 tsp'
                },
                {
                    name: 'medium Madras curry powder',
                    cant: '2 tsp'
                },
                {
                    name: 'pork tenderloin, trimmed of any fat',
                    cant: '300g'
                },
                {
                    name: 'medium egg noodle',
                    cant: '140g'
                },
                {
                    name: 'sunflower oil',
                    cant: '1 tbsp'
                },
                {
                    name: 'fresh mixed stir-fry vegetables',
                    cant: '2 x 300g'
                },
                {
                    name: 'cooked prawn',
                    cant: '100g'
                },
            ]
        },
    },
    {
        title: 'Fish',
        src: images[4],
        recipe :{
            diners : 3,
            ingredients : [
                {
                    name: 'sushi rice',
                    cant: '300g'
                },
                {
                    name: 'bamboo mat',
                    cant: '1'
                },
                {
                    name: 'plastic wrap',
                    cant: '50cm'
                },
                {
                    name: 'nori',
                    cant: '1'
                },
                {
                    name: 'low-sodium soy sauce',
                    cant: '1 cup'
                },
                {
                    name: 'toasted sesame seeds and/or chia seeds',
                    cant: '55g'
                },
                {
                    name: 'sriracha chili sauce',
                    cant: '1 bottle'
                },
                {
                    name: 'wasabi + pickled ginger ',
                    cant: '100g'
                },
            ]
        },
    },
    {
        title: 'Ham Snacks',
        src: images[5],
        recipe :{
            diners : 3,
            ingredients : [
                {
                    name: 'ground fully cooked ham',
                    cant: '2 cups'
                },
                {
                    name: 'cups stiff mashed potatoes',
                    cant: '2 cups'
                },
                {
                    name: 'shredded Swiss cheese',
                    cant: '1 cups'
                },
                {
                    name: 'cup mayonnaise',
                    cant: '1/3'
                },
                {
                    name: 'cup finely chopped onion',
                    cant: '1/4'
                },
                {
                    name: 'large egg',
                    cant: '1'
                },
                {
                    name: 'prepared mustard',
                    cant: '1 teaspoon'
                },
                {
                    name: 'pepper',
                    cant: '1/4'
                },
            ]
        },
    },
    {
        title: 'Pasta',
        src: images[6],
        recipe :{
            diners : 3,
            ingredients : [
                {
                    name: 'tomato paste',
                    cant: '1 Tbsp'
                },
                {
                    name: 'red wine vinegar',
                    cant: '2 Tbsp'
                },
                {
                    name: 'dried basil',
                    cant: '1/2 Tbsp'
                },
                {
                    name: 'garlic powder',
                    cant: '1/4 tsp'
                },
                {
                    name: 'sugar',
                    cant: '1/4 tsp'
                },
                {
                    name: 'salt',
                    cant: '1/4 tsp'
                },
                {
                    name: 'freshly cracked black pepper',
                    cant: '1/4 tsp'
                },
                {
                    name: 'olive oil',
                    cant: '6 Tbsp'
                },
            ]
        },
    },
    {
        title: 'Pizza',
        src: images[7],
        recipe :{
            diners : 3,
            ingredients : [
                {
                    name: 'warm water',
                    cant: '1 1/2 cups'
                },
                {
                    name: 'active dry yeast',
                    cant: '1 package'
                },
                {
                    name: 'bread flour',
                    cant: '3 3/4 cups'
                },
                {
                    name: 'extra virgin olive oil',
                    cant: '2 tbsp'
                },
                {
                    name: 'salt',
                    cant: '2 teaspoons'
                },
                {
                    name: 'sugar',
                    cant: '1 teaspoons'
                },
            ]
        },
    },
    {
        title: 'Spaguetti',
        src: images[8],
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
        src: images[9],
        recipe :{
            diners : 6,
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
        src: images[10],
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