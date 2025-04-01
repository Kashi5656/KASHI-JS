// Abstract Car class
class Car {
    constructor(brand) {
        if (this.constructor === Car) {
            throw new Error("Cannot instantiate abstract class Car directly.");
        }
        this.brand = brand;
    }

    // Abstract method (to be implemented by subclasses)
    startEngine() {
        throw new Error("startEngine() must be implemented in subclasses.");
    }

    getDetails() {
        return `Brand: ${this.brand}`;
    }
}

// Subclass: PetrolCar
class PetrolCar extends Car {
    startEngine() {
        console.log(`${this.brand} Petrol Engine started with a roar! 🔥`);
    }
}

// Subclass: ElectricCar
class ElectricCar extends Car {
    startEngine() {
        console.log(`${this.brand} Electric Engine started silently! ⚡`);
    }
}

//  Testing the classes
try {
    const car = new Car("Generic");  // Throws an error
} catch (error) {
    console.log(error.message);       // Cannot instantiate abstract class Car directly.
}

const petrolCar = new PetrolCar("Ford");
petrolCar.startEngine();              // Ford Petrol Engine started with a roar! 
console.log(petrolCar.getDetails());  // Brand: Ford

const electricCar = new ElectricCar("Tesla");
electricCar.startEngine();            // Tesla Electric Engine started silently! 
console.log(electricCar.getDetails()); // Brand: Tesla
