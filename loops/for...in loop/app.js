const person ={fname:"surya", lname:"singh", age:26};
let text = "";
for(let x in person){
    text = text + person[x];
    console.log(text);
} 

//output => surya
// suryasingh
//suryasingh26 