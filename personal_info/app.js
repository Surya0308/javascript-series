const personal = {
    name : "suraj",
    age : 26,
    profession : "software developer",
    company : "nxg infosystem",
    experience : 2,
}

console.log(personal);

console.log(personal['name']);
console.log(personal.name);

let myName = document.getElementById("name");
let myAge = document.getElementById("age");
let myDesignation = document.getElementById("designation");
let myCompany = document.getElementById("company");
let myExperience = document.getElementById("experience");
let myInfo = document.getElementById("info-btn");

myInfo.addEventListener("click", function(){
    myName.textContent = personal.name;
    myAge.textContent = personal.age;
    myDesignation.textContent = personal.profession;
    myCompany.textContent = personal.company;
    myExperience.textContent = personal.experience;
    myInfo.style.color = "Green";
    myInfo.style.backgroundColor = "aquamarine";
})
