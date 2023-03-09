//this includes the vehicle class as a module
const { Vehicle } = require("./vehicle");
const VehicleModule = require("./vehicleBaseClass")

class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
    }}

class Car extends Vehicle {
constructor(make, model, year, color, mileage) {
    super (make, model, year, color, mileage)
    this.passenger = 0;
    this.maxPassenger = 5;
    this.maxSpeed = 160;
    this.fuel = 10;
    this.numberOfWheels = 4;
    this.scheduleService = false;
}}

checkService () 
    if (this.mileage > 30000) {
        this.checkService = true
        return this.checkService;
    }


start () 
    if (this.fuel > 0) {
        console.log ("engine has started");
        return this.started = true
    } else {
        console.log ("no fuel");
        return this.started
    }
    


loadPassenger(num) 
if (this.passenger > this.maxPassenger) {
    if ((num + this.passenger) <= this.maxPassenger) {
        this.passenger = num;
        return this.passenger;
    } else {
        console.log( `${this.model} ${this.make}  not enough space for all passengers`)
        console.log(`${this.model} ${this.make}  is full`);
    }
}


//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

myCar.start ()
myCar.loadPassenger(5)
myCar.stop ()
myCar.checkService()

console.log(myCar)