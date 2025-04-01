// Base class: Vehicle
class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    // Method to display vehicle details
    getDetails() {
        return `Brand: ${this.brand}, Year: ${this.year}`;
    }
}

// Subclass: Car
class Car extends Vehicle {
    constructor(brand, year, fuelType) {
        super(brand, year);
        this.fuelType = fuelType;
    }

    // Overriding getDetails() method
    getDetails() {
        return `${super.getDetails()}, Fuel Type: ${this.fuelType}`;
    }
}

// Subclass: Bike
class Bike extends Vehicle {
    constructor(brand, year, hasGear) {
        super(brand, year);
        this.hasGear = hasGear;
    }

    // Overriding getDetails() method
    getDetails() {
        return `${super.getDetails()}, Has Gear: ${this.hasGear ? "Yes" : "No"}`;
    }
}

// Subclass: ElectricCar (inherits from Car)
class ElectricCar extends Car {
    constructor(brand, year, fuelType, batteryCapacity) {
        super(brand, year, fuelType);
        this.batteryCapacity = batteryCapacity;
    }

    // Overriding getDetails() method
    getDetails() {
        return `${super.getDetails()}, Battery Capacity: ${this.batteryCapacity} kWh`;
    }
}

// ✅ Testing the classes
const vehicle = new Vehicle("Toyota", 2020);
console.log(vehicle.getDetails()); // Brand: Toyota, Year: 2020

const car = new Car("Honda", 2021, "Petrol");
console.log(car.getDetails()); // Brand: Honda, Year: 2021, Fuel Type: Petrol

const bike = new Bike("Yamaha", 2019, true);
console.log(bike.getDetails()); // Brand: Yamaha, Year: 2019, Has Gear: Yes

const eCar = new ElectricCar("Tesla", 2023, "Electric", 75);
console.log(eCar.getDetails()); // Brand: Tesla, Year: 2023, Fuel Type: Electric, Battery Capacity: 75 kWh
