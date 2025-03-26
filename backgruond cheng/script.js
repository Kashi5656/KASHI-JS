

const btn=document.getElementById("btn");
const colorcode=document.getElementById("copybtn");
const body=document.querySelector("body");
let copy=document.querySelector("#copi");


btn.addEventListener("click",()=>{
    changBgcolor();
});

function changBgcolor()
{
    let color=Math.floor(Math.random()*16777216).toString(16);
    body.style.backgroundColor="#"+color;
    colorcode.innerHTML="#"+color;
    navigator.clipboard.writeText("#"+color);
    colorcode.style.color="#"+color;
}

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(colorcode.innerText).then(()=>alert(`Copied: ${colorcode.textContent}`));
    copy.innerText="copied !";
})