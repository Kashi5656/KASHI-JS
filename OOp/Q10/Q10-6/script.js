// Movie class definition
class Movie {
    // Static property to track the total number of ratings
    static totalRatingsCount = 0;

    constructor(title) {
        this.title = title;
        this.ratings = [];
    }

    // Method to add a rating
    addRating(rating) {
        if (rating >= 0 && rating <= 5) {
            this.ratings.push(rating);
            Movie.totalRatingsCount++;  // Increment the static counter
            console.log(`Added rating ${rating} for ${this.title}`);
        } else {
            console.log(`Invalid rating for ${this.title}. Please add a rating between 0 and 5.`);
        }
    }

    // Method to display movie details
    getDetails() {
        const avgRating = this.ratings.length
            ? (this.ratings.reduce((sum, val) => sum + val, 0) / this.ratings.length).toFixed(2)
            : "No ratings yet";
        return `Title: ${this.title}, Average Rating: ${avgRating}, Ratings Count: ${this.ratings.length}`;
    }
}

// ✅ Instantiating Movie objects
const movie1 = new Movie("Inception");
const movie2 = new Movie("The Dark Knight");
const movie3 = new Movie("Interstellar");

// Adding ratings
movie1.addRating(5);
movie1.addRating(4);
movie2.addRating(3);
movie2.addRating(4);
movie3.addRating(5);
movie3.addRating(2);

// Displaying details
console.log(movie1.getDetails());    // Title: Inception, Average Rating: 4.50, Ratings Count: 2
console.log(movie2.getDetails());    // Title: The Dark Knight, Average Rating: 3.50, Ratings Count: 2
console.log(movie3.getDetails());    // Title: Interstellar, Average Rating: 3.50, Ratings Count: 2

// Displaying the total number of ratings across all movies
console.log(`Total Ratings Submitted: ${Movie.totalRatingsCount}`);  // Total Ratings Submitted: 6
