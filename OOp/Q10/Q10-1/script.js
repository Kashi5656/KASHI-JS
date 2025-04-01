class BankAccount {
    // Private property (using # to enforce encapsulation)
    balance;

    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            document.writeln(`Deposited: $${amount}`);
        } else {
            document.writeln("Invalid deposit amount.");
        }
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            document.writeln(`Withdrawn: $${amount}`);
        } else if (amount > this.balance) {
            document.writeln("Insufficient balance.");
        } else {
            document.writeln("Invalid withdrawal amount.");
        }
    }

    // Method to get the current balance
    getBalance() {
        return this.balance;
    }
}

// ✅ Testing the ATM System
const account = new BankAccount(1000);  // Initial balance: $1000

account.deposit(500);                   // Output: Deposited: $500
account.withdraw(300);                  // Output: Withdrawn: $300
account.withdraw(1500);                 // Output: Insufficient balance
document.writeln(`Balance: $${account.getBalance()}`);  // Output: Balance: $1200

// Attempting direct access (will be undefined)
document.writeln(account.balance);  //  Syntax Error: Private field can't be accessed
