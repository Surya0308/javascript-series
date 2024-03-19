// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
    // console.log(links.classList);
    console.log(links.classList.contains("random")); //give false bcz random class doesn't exist on ul.
    console.log(links.classList.contains("links")); // give "true" bcz links class exist on ul.

    if(links.classList.contains("show-links")){
        links.classList.remove("show-links");
        navToggle.style.transform = "rotate(-360deg)"; // Rotate 90 degrees
    } else{
        links.classList.add("show-links");
        navToggle.style.transform = "rotate(90deg)"; // Rotate 90 degrees
    }
    // links.classList.toggle("show-links")
}); 

