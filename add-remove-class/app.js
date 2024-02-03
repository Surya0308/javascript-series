var showBtn = document.querySelector('.show-btn');
var hideBtn = document.querySelector('.hide-btn');
var showContent = document.querySelector('.show-content');
var hideContent = document.querySelector('.hide-content');

showBtn.addEventListener('click', function(){
    showContent.style.display = 'block';
})
hideBtn.addEventListener('click', function(){
    hideContent.style.display = 'none';
})