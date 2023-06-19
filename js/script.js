let car1 = {
    // 1. P:v (many)
    brand:"TATA",
    year:2023,
    model:"Harrier",
    color:"Black",
    engine:"EV/Petrol/Disel",
    price:200000,

    // 2. Method (many)
    getFullDetails(){
        return this.brand+ " " +this.color+ " " +this.engine+ " " +this.model+ " " + this.price;
    }
}
let car2 = {
    // 1. P:v (many)
    brand:"Mahindra",
    year:2022,
    model:"Thar",
    color:"Red",
    engine:"EV/Petrol/Disel",
    price:180000,
    getInfo(){
        console.log(this.brand)
        return car2.brand+ " " +this.color+ " " +this.engine+ " " +this.model+ " " + this.price;
    }

    // 2. Method (many)
}
const car3 = {
    // 1. P:v (many)
    brand:"Hundai",
    year:2021,
    model:"Verna",
    color:"White",
    engine:"EV/Petrol/Disel",
    price:160000,

    // 2. Method (many)
}
// console.log(car1.getFullDetails());
// console.log(car2.getInfo());
console.log(car1.engine); // objectName.PropertyName
console.log(car2['brand']); //object["Property"]
let x="brand"
console.log(car3[x]); // object[expressions] x is an expression