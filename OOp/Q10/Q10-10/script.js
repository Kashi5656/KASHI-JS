// Car class definition
class Car {
    constructor(brand, year) {
        this.type = "Car";
        this.brand = brand;
        this.year = year;
    }

    getDetails() {
        return `${this.year} ${this.brand} (${this.type})`;
    }
}

// Bike class definition
class Bike {
    constructor(brand, year) {
        this.type = "Bike";
        this.brand = brand;
        this.year = year;
    }

    getDetails() {
        return `${this.year} ${this.brand} (${this.type})`;
    }
}

// VehicleFactory class definition
class VehicleFactory {
    static createVehicle(type, brand, year) {
        switch (type.toLowerCase()) {
            case "car":
                return new Car(brand, year);
            case "bike":
                return new Bike(brand, year);
            default:
                console.log("Invalid vehicle type. Use 'car' or 'bike'.");
                return null;
        }
    }
}

// ✅ Creating vehicles using the factory
const myCar = VehicleFactory.createVehicle("car", "Toyota", 2023);
const myBike = VehicleFactory.createVehicle("bike", "Yamaha", 2022);
const unknownVehicle = VehicleFactory.createVehicle("truck", "Ford", 2025);  // Invalid case

// Displaying vehicle details
if (myCar) console.log(myCar.getDetails());    // Output: 2023 Toyota (Car)
if (myBike) console.log(myBike.getDetails());  // Output: 2022 Yamaha (Bike)
