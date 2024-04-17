let studentData = {
    name: 'surya pratap singh',
    standard: 'graduated',
    favourite_sub: 'physics',
    boring_sub: 'english'
}

// console.log(studentData);

let studentName = document.querySelector('.student_name');
let standard = document.querySelector('.standard');
let favouriteSub = document.querySelector('.favourite_sub');
let boringSub = document.querySelector('.boring_sub');
let studentInfoButton = document.querySelector('.student_info_button');

studentInfoButton.addEventListener("click", function(){
    studentName.textContent = studentData.name;
    standard.textContent = studentData.standard;
    favouriteSub.textContent = studentData.favourite_sub;
    boringSub.textContent = studentData.boring_sub;
})
