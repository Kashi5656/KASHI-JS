// Student class definition
class Student {
    constructor(percentage = 0) {
        this._percentage = percentage;  // Using a private property
    }

    // Getter for grade (based on percentage)
    get grade() {
        if (this._percentage >= 90) return 'A';
        if (this._percentage >= 80) return 'B';
        if (this._percentage >= 70) return 'C';
        if (this._percentage >= 60) return 'D';
        if (this._percentage >= 50) return 'E';
        return 'F';  // Below 50 is a failing grade
    }

    // Setter for grade (updates percentage)
    set grade(value) {
        switch (value.toUpperCase()) {
            case 'A':
                this._percentage = 90;
                break;
            case 'B':
                this._percentage = 80;
                break;
            case 'C':
                this._percentage = 70;
                break;
            case 'D':
                this._percentage = 60;
                break;
            case 'E':
                this._percentage = 50;
                break;
            case 'F':
                this._percentage = 40;  // Failing grade
                break;
            default:
                console.log('Invalid grade. Use A, B, C, D, E, or F.');
        }
    }

    // Method to display student details
    getDetails() {
        return `Percentage: ${this._percentage}%, Grade: ${this.grade}`;
    }
}

// ✅ Testing the class
let student = new Student();
student.percentage = 85;               // Setting percentage
console.log(student.grade);             // Output: B
console.log(student.getDetails());      // Percentage: 85%, Grade: B

// Setting grade using setter
student.grade = 'A';                    
console.log(student.getDetails());      // Percentage: 90%, Grade: A

student.grade = 'C';
console.log(student.getDetails());      // Percentage: 70%, Grade: C

student.grade = 'F';
console.log(student.getDetails());      // Percentage: 40%, Grade: F

// Invalid grade
student.grade = 'Z';                    // Invalid grade message
