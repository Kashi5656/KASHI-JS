// wap to create a class for employee with attributes like id ,name,salary and role, set all attributes
// and get for atleast 3 objects/employee.

class employee{

    attributes(id,name,salary,role){
        this.id=id;
        this.name=name;
        this.salary=salary;
        this.role=role;
    }

    getter() {
        document.writeln(this.id);
        document.writeln(this.name);
        document.writeln(this.salary);
        document.writeln(this.role);
    }

}

const b1=new employee();

b1.attributes("121","Kashi","122,500","Hr");
b1.getter();


const b2=new employee();

b2.attributes("122","chirag","16,500","employee");
b2.getter();

