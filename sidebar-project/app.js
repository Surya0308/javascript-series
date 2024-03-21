const toggleBtn = document.querySelector('.sidebar-toggle');
const leftSidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener("click", function() {
    console.log(leftSidebar.classList);
    if(leftSidebar.classList.contains("show-sidebar")) {
        leftSidebar.classList.remove("show-sidebar");
    } else {
        leftSidebar.classList.add("show-sidebar");
    }
    // leftSidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function() {    
    leftSidebar.classList.remove("show-sidebar");
});