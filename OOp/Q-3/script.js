
// create a class named student with private attributes roll_no,name,age,std and percentage, initialize
// all attributes by parameterized constructor(private attributes need to declare in global scope in class)
// and print all details for 3 students.


class data{

    #roll_no;
    #name;
    #age;
    #std;
    #percentage;
    constructor(roll_no,name,age,std,percentage){
        this.#roll_no = roll_no;
        this.#name=name;
        this.#age=age;
        this.#std=std;
        this.#percentage=percentage;
    }

    getter() {
        document.writeln(this.#roll_no);
        document.writeln(this.#name);
        document.writeln(this.#age);
        document.writeln(this.#std);
        document.writeln(this.#percentage);
    }

}

const b1=new data("11","kashi","18","12","83.16");
b1.getter();


const b2=new data("12","deep","19","12","86.66");
b2.getter();

const b3=new data("13","abhilash","16","12","56.11");
b3.getter();
