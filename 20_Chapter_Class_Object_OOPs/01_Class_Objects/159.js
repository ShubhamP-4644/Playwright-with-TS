class Car{
    // constructor(){
    //  // Default Conscutor
    // }

    // Param
    constructor(assigned_name){
        this.name = assigned_name;
    }
}

let hyundai_i10 = new Car("i10");
console.log(hyundai_i10.name);

let hyundai_create = new Car("creta");
console.log(hyundai_create.name);



const a = new Car("i11");     // constructor runs → "i10"
const b = new Car("Nexon");

// class Bad { constructor(a) {} constructor(b) {} }

class Bike {}
new Bike();   // Bike {}  — works fine, just has nothing in it