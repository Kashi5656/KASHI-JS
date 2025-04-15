const quote=document.getElementById("quote");
const author=document.getElementById("author");


const api="https://dummyjson.com/quotes/random";

async function getcode(url) {
    const response=await fetch(url);
    var data=await response.json();
    quote.innerHTML=data.quote;
    author.innerHTML=data.author;
}

getcode(api);

function twitter(){
    window.open("https://twitter.com/intent/tweet?text=Hello%20world" +quote.innerHTML+"....by","tweet windo"+author.innerHTML,"width=300");
}