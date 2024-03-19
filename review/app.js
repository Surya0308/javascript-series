// local reviews data
const reviews = [
    {
        id: 1,
        name: "Ankit singh",
        job: "Mppsc aspirant",
        img: "./assets/ankit.jpg",
        text: "This is a Ankit singh. he is fully dedicated to cracked mppsc civil service examination."
    },
    {
        id: 2,
        name: "Gyani singh",
        job: "senior web developer",
        img: "./assets/gyani.jpg",
        text: "This is a Gyani singh. he is fully dedicated & passionated to solving queries related to the web development ."
    },
    {
        id: 3,
        name: "Surya singh",
        job: "web developer",
        img: "./assets/suraj.jpg",
        text: "This is a Surya singh. he is fully dedicated & passionated to solving queries related to the web development ."
    },
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function() {
    // console.log("shake and bake");
    showPerson();
})

// show person based on item

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();    
});

// show prev person

prevBtn.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(); 
});

// show random person

randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
})
