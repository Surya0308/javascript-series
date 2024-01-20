// const colors = ["red", "green", "blue"];
// for(let color of colors){
//     console.log(color);
// }

//output
//red
//green
//blue

const car = {brand: "Toyota", model: "Camry", year: 2020};

let carInfo = "";
for (let key in car) {
  carInfo += `${key}: ${car[key]}\n`;
}
console.log(carInfo);

//output
// brand: Toyota
// model: Camry
// year: 2020