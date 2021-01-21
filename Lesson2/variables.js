const number = 10;
// console.log(number)

let str = "string";

let boolean = false;

let object = {
    number: 10,
    string: "test",
    boolean: true,
    subObject: {
        name: "Name"
    }
}

let age = 50;



// console.log(object["smth"]);

let nullVariable = null;

let undefinedVariable = undefined;


// Есть еще bigInt и simbol, но о них попозже

// console.log(typeof "number");

// 32 > 50
// false
// 50 > 32
// true
// 50 == "50"
// true
// 50 !== "50"
// true


let firstPerson = {
    name: "first",
    age: 45
}

let secondPerson = {
    name: "second",
    age: 15
}

let thirdPerson = {
    name: "third",
    age: 85
}

// age = "age";

// console.log((firstPerson[age] + secondPerson.age + thirdPerson.age)/3) // средний возраст


let myAge = prompt("Сколько вам лет?");

alert("Вам полных" + myAge + "лет");
alert(myAge > 18 && myAge > 0 ? "Совершеннолетний" : "Несовершеннолетний")