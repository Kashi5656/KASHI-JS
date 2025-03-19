let zero = document.getElementById("zero");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let count = 0;

btn.addEventListener("click", () => {
    count++;
    zero.innerHTML = count;
});

btn2.addEventListener("click", () => {
    if (count >= 0) {
        document.writeln("0 is last numbar");
    }
    count--;
    zero.innerHTML = count;
});

btn3.addEventListener("click", () => {
    if (count == 0) {
        document.writeln("if you multiple any numbar with 0 answer is 0")
    }
    else {
        count *= 2;
        zero.innerHTML = count;
    }
});

btn4.addEventListener("click", () => {
   
    if(count==0)
    {
        document.writeln("if you divied any numbar with 0 answer is 0")
    }
    count /= 2;
    zero.innerHTML = count;
});