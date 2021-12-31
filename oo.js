class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        console.log("Beep.");
    }
    toString(){
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}`);
    }
}

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!";
    }
}

class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(newVehicle){
        if (this.vehicles.length >= this.capacity){
            return "Sorry, we are full";
        }
        else if (newVehicle instanceof Vehicle){
            this.vehicles.push(newVehicle);
        }
        else {
            return "Only Vehicles are Allowed in here"
        }
    }

}
