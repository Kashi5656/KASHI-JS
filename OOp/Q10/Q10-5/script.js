// Restaurant class definition
class Restaurant {
    constructor(name, cuisineType, rating) {
        this.name = name;
        this.cuisineType = cuisineType;
        this.rating = rating;
    }

    // Method to display restaurant details
    getDetails() {
        return `Name: ${this.name}, Cuisine: ${this.cuisineType}, Rating: ${this.rating} ⭐`;
    }
}

// ✅ Instantiating 3 Restaurant objects
const restaurant1 = new Restaurant("Olive Garden", "Italian", 4.5);
const restaurant2 = new Restaurant("Sushi Zen", "Japanese", 4.8);
const restaurant3 = new Restaurant("Spicy Villa", "Indian", 4.3);

// Displaying details of each restaurant
console.log(restaurant1.getDetails());   // Name: Olive Garden, Cuisine: Italian, Rating: 4.5 ⭐
console.log(restaurant2.getDetails());   // Name: Sushi Zen, Cuisine: Japanese, Rating: 4.8 ⭐
console.log(restaurant3.getDetails());   // Name: Spicy Villa, Cuisine: Indian, Rating: 4.3 ⭐
