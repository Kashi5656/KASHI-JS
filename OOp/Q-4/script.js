// perform multilevel inheritance where Indian is parent for class person, person is parent for class employee
// indian class - adharNo,birthPlace
// person - name,age,gender
// emp - id,salary, role
// access all properties of parent by child class only and set and get all values.

class indian{
  
    constructor(adharno,birthPlace)
    {
        this.adharno=adharno;
        this.birthplace=birthPlace;
    }
}

class person extends indian{

    constructor(adharno,birthplace,name,age,gendar)
    {
        super(adharno,birthplace);
        this.name=name;
        this.age=age;
        this.gendar=gendar;
    }

}
class emp extends person{
  
    constructor(adharno,birthPlace,name,age,gendar,id,salary,roll)
    {
        super(adharno,birthPlace,name,age,gendar);
        this.id=id;
        this.salry=salary;
        this.roll=roll;
    }
    getter()
    {
        document.writeln(this.adharno);
        document.writeln(this.birthplace);
        document.writeln(this.name);
        document.writeln(this.age);
        document.writeln(this.gendar);
        document.writeln(this.id);
        document.writeln(this.salry);
        document.writeln(this.roll)
    }
}

const b1=new emp(123456789,"surat","kashi",21,"male",105,"12,000","hr <br>");

b1.getter();