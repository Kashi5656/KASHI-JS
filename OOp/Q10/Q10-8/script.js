// Employee class definition
class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    // Method to display employee details
    getDetails() {
        return `${this.name} - ${this.position}`;
    }
}

// Department class definition
class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];  // Array to hold Employee objects
    }

    // Method to add an employee
    addEmployee(employee) {
        if (employee instanceof Employee) {
            this.employees.push(employee);
            console.log(`Added ${employee.name} to ${this.name} department.`);
        } else {
            console.log("Invalid employee object.");
        }
    }

    // Method to list employee names in the department
    listEmployees() {
        if (this.employees.length === 0) {
            return `${this.name} department has no employees.`;
        }
        return this.employees.map(emp => emp.name);
    }

    // Method to display detailed information of all employees
    getDepartmentDetails() {
        console.log(`Department: ${this.name}`);
        this.employees.forEach((emp, index) => {
            console.log(`${index + 1}. ${emp.getDetails()}`);
        });
    }
}

// ✅ Creating department and adding employees
let hr = new Department("HR");
hr.addEmployee(new Employee("Alice", "Manager"));
hr.addEmployee(new Employee("Bob", "Recruiter"));
hr.addEmployee(new Employee("Charlie", "HR Assistant"));

let it = new Department("IT");
it.addEmployee(new Employee("David", "Software Engineer"));
it.addEmployee(new Employee("Eve", "System Analyst"));

// Displaying employee names in each department
console.log("\nHR Employees:", hr.listEmployees());  // ["Alice", "Bob", "Charlie"]
console.log("IT Employees:", it.listEmployees());    // ["David", "Eve"]

// Displaying detailed department info
console.log("\nHR Department Details:");
hr.getDepartmentDetails();

console.log("\nIT Department Details:");
it.getDepartmentDetails();
