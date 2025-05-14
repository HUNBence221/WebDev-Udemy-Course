// To make an object literal:
const dog = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    age: 7
}

const Matthew = {
    name: "Matthew",
    age: 20,
    city: "Tulsa",
    zip: 91003,
    isAdmin: true,
}

const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    totalCaloriesBurn: 5755,
    workoutsThisWeek: "5 of 7",
    avgGoodSleep: "2:13",
}

const person = {
    firstName: "Mick",
    lastName: "Jagger",
}
// person { firstName: "Mick", lastName: "Jagger" }

const years = {
    1999: "GOOD",
    2020: "BAD",
}

years[1999] // "GOOD"
years["1999"] // "GOOD"


// All keys will be turned into strings!
// To retrieve a value:
dog.age; //7
dog["age"]; //7
person.lastName; // "Jagger"
person["lastName"]; // "Jagger"

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`; 
// fullAddress = "45 Johnson Ave, Brooklyn, NY 11206"


//updating values almost as arrays, just not using numbers inside the []
const midterms = {
    danielle: 96,
    thomas: 78,
}
midterms.thomas // 78
midterms.thomas = 79;
midterms // { danielle: 96, thomas: 79 }
midterms.thomas = 'C+'
midterms.danielle = 'A'
midterms // { danielle: 'A', thomas: 'C+' }
midterms.ezra = 'B+'
midterms.antonio = 'A-'
midterms // { danielle: 'A', thomas: 'C+', ezra: 'B+', antonio: 'A-' }

// Nested arrays
const shoppingCart = [
    {
        product: "Jenga Classic",
        price: 6.88,
        quantity: 1,
    },
    {
        product: "Echo Dot",
        price: 29.99,
        quantity: 3,
    },
    {
        product: "Fire Stick",
        price: 39.99,
        quantity: 2,
    }
]
 shoppingCart  
// [
//     { product: "Jenga Classic", price: 6.88, quantity: 1 },
//     { product: "Echo Dot", price: 29.99, quantity: 3 },
//     { product: "Fire Stick", price: 39.99, quantity: 2 }
// ]

shoppingCart[0].product // "Jenga Classic"
shoppingCart[1].price // 29.99
shoppingCart[2].quantity // 2

// Nested objects
const student = {
    firstName: "David",
    lastName: "Jones",
    strenghts: ["Music", "Art"],
    exams: {
        midterm: 92,
        final: 88,
    },
}
student.firstName // "David"
student.exams.final // 88
student.exams["final"] // 88
student.strenghts[0] // "Music"
student.strenghts[1] // "Art"
