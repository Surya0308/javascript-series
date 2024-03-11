//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {  //for each. and we already know that in the for each, we pass in a callback funtion, we arrived here func, & then this func is called against each & every item. in my list my what's called in this callback func, i can access each & every item using parameter
    // console.log(btn);
    btn.addEventListener('click', function(e){  //hamare pas button ki jo list hai usme se user kis button ko click kar rha hai usko check krne ke liye e => event object ka use karte hai.
        // console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList; // event object has a property of current target
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count == 0){
            value.style.color = "";
        }
        value.textContent = count;
    });

});
