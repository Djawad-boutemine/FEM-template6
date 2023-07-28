let btns = document.querySelectorAll("button");
let questions = document.querySelectorAll(".text div div p");
let answers = document.querySelectorAll(".text > div > p");
let main = document.querySelector("main");
let states = [];
for (let i = 0; i < btns.length; i++) { states.push(false) };
console.log(states);
let add = 0 ;
console.log(window.innerWidth);
let radio = 7 ;
if (window.innerWidth > 500 ) { radio = 4} ;
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        if (!states[i]) {
            btns[i].style.cssText = "transform : rotate(180deg)";
            questions[i].classList.add("selected");
            answers[i].style.cssText = " display : inline-block";
            states[i] = !states[i];
            add++ ;
            main.style.height = 100+ add*radio + "vh" ;
        }else {
            btns[i].style.cssText = "transform : rotate(0deg)";
            questions[i].classList.remove("selected");
            answers[i].style.cssText = " display : none";
            states[i] = !states[i];
            add-- ;
            main.style.height = 100+ add*radio + "vh" ;
        }
    }
}