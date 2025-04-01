// Base class: Payment
class Payment {
    // Pay method with overloading support using default parameter
    pay(amount, currency = "USD") {
        console.log(`Paid ${amount} ${currency} using Payment`);
    }
}

// Subclass: CreditCard
class CreditCard extends Payment {
    // Overriding pay() method
    pay(amount, currency = "USD") {
        console.log(`Paid ${amount} ${currency} using Credit Card`);
    }
}

// Subclass: PayPal
class PayPal extends Payment {
    // Overriding pay() method
    pay(amount, currency = "USD") {
        console.log(`Paid ${amount} ${currency} using PayPal`);
    }
}

// ✅ Method Overloading Example
class MultiPayment extends Payment {
    // Overloaded pay() method
    pay(...args) {
        if (args.length === 1) {
            // If only amount is provided
            console.log(`Paid ${args[0]} USD`);
        } else if (args.length === 2) {
            // If both amount and currency are provided
            console.log(`Paid ${args[0]} ${args[1]}`);
        } else {
            console.log("Invalid arguments");
        }
    }
}

// ✅ Testing the classes
const basePayment = new Payment();
basePayment.pay(100);                  // Paid 100 USD using Payment
basePayment.pay(200, "EUR");           // Paid 200 EUR using Payment

const ccPayment = new CreditCard();
ccPayment.pay(150);                    // Paid 150 USD using Credit Card
ccPayment.pay(300, "GBP");             // Paid 300 GBP using Credit Card

const ppPayment = new PayPal();
ppPayment.pay(250);                    // Paid 250 USD using PayPal
ppPayment.pay(400, "AUD");             // Paid 400 AUD using PayPal

// Testing method overloading
const multiPay = new MultiPayment();
multiPay.pay(500);                     // Paid 500 USD
multiPay.pay(600, "CAD");              // Paid 600 CAD
multiPay.pay(700, "JPY", "Extra");     // Invalid arguments
