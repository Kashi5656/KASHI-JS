// wap to craete a class for animal with attribute like name,type,gender and age, make these all
// attribute private to secure direct access of the users, perform input and output for 3 defferent
// animals.


class forest{

    #type;
    #name;
    #gendar;
    #age;

    attributes(type,name,gendar,age){
        this.#name=name;
        this.#type=type;
        this.#gendar=gendar;
        this.#age=age;
    }

    getter() {
        document.writeln(this.#name);
        document.writeln(this.#type);
        document.writeln(this.#gendar);
        document.writeln(this.#age);
    }

}

const b1=new forest();

b1.attributes("lion","Mammal","male","22");
b1.getter();


const b2=new forest();

b2.attributes("tigar","carnivorous mammal","female","12");
b2.getter();

const b3=new forest();

b3.attributes("elaphant","carnivorous mammal","male","33");
b3.getter();
