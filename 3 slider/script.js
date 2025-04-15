const gallery=document.querySelector(".gallery");
const backbtn=document.getElementById("backbtn");
const nextbtn=document.getElementById("nextbtn");

gallery.addEventListener("wheel",(e)=>{
    e.preventDefault();
    gallery.scrollLeft +=e.deltaX;
    gallery.style.scrollBehavior="auto";
});

nextbtn.addEventListener("click",()=>{
    gallery.style.scrollBehavior="smooth";
    gallery.scrollLeft+=900;
});

backbtn.addEventListener("click",()=>{
    gallery.style.scrollBehavior="smooth";
    gallery.scrollLeft-=900;
});