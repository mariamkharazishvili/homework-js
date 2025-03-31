//1. Დაბეჭდეთ რიცხვები 2 დან 8 მდე

for (i=2;i<8;i++){
    console.log(i);
}

//2.  5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…)

{
    for(i=5;i<35;i+=4){
        console.log(i);
    }
}

//3. დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი

let number = 1;
for (let i = 3; i < 8; i++) {
    number *= i;
}
console.log("number=",number);

/* 4. Გამოაცხადეთ ობიექტი person რომელსაც აქვს firstName, lastName, age 
და დაბეჭდეთ person-სრული სახელი ( სახელი და გვარი)*/

let person ={
    firstName:"Mariam",
    lastName:"Kharazishvili",
    age:21
}
console.log(person.firstName ,person.lastName);

//5. დაბეჭდეთ მეოთხე დავალებაში გამოცხადებული პერსონის თითოეული property value 
for( let personkey in person ){
        console.log(person[personkey])
}

//6. დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"]; დაბეჭდეთ მასივის თითოეული წევრი.
let fruits =["Apple","Banana","Orange"];

for(i =0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//7. დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits

fruits.unshift("Grapes");
fruits.push("Pineapples");
console.log(fruits);

//8.დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯამი

let num = 0;
for (i=1;i<34;i++){
    num +=i;
}
console.log(num);

