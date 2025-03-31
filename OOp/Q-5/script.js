//wap to perform method overloading to find sum of 2 to 4 arguments.
// ex. sum(10,20), sum(10,20,30), sum(_....4)

class Sum {

    constructor(a = 0, b = 0, c = 0, d = 0, ...arg) {
        if ([a, b, c, d, ...arg].length > 4) {  
            document.writeln(`More than 4 arguments are not allowed!<br>`);
            this.down = true;
            return;
        }

        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    print() {
        if (this.down) return;

        let sum = this.a + this.b + this.c + this.d;
        document.writeln(`Addition: ${sum}<br>`);
    }
};

const add1 = new Sum(10, 20);
add1.print();

const add2 = new Sum(10, 20, 30);
add2.print();

const add3 = new Sum(10, 20, 30, 40);
add3.print();

const add4 = new Sum(10, 20, 30, 40, 50);
add4.print();
