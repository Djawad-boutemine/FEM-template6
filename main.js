let btns = document.querySelectorAll("button");
let questions = document.querySelectorAll(".text div div p");
let answers = document.querySelectorAll(".text > div > p");
let main = document.querySelector("main");
let states = [];
for (let i = 0; i < btns.length; i++) { states.push(false) };
console.log(states);
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        if (!states[i]) {
            btns[i].style.cssText = "transform : rotate(180deg)";
            questions[i].classList.add("selected");
            answers[i].style.cssText = " display : inline-block";
            states[i] = !states[i];

            main.style.height = 100+ 7*i + "vh" ;
        }else {
            btns[i].style.cssText = "transform : rotate(0deg)";
            questions[i].classList.remove("selected");
            answers[i].style.cssText = " display : none";
            states[i] = !states[i];
        }
    }
}