const accesskey="JSn_G0LCgh08G3Aj4Nw49HgCSQUtK_MhOT4yeerafvM";
const form=document.getElementById("form");
const inputbox=document.getElementById("inputbox");
const searchresult=document.getElementById("result");
const showbtn=document.getElementById("showbtn");

let keyword="";
let page=1;

async function searchimg() {
    keyword=inputbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response=await fetch(url);
    const data=await response.json();

    const results=data.results;

    if (page === 1) {
        searchresult.innerHTML = '';
    }

    results.map((result)=>{
        const img=document.createElement("img");
        img.src=result.urls.small;

        const a=document.createElement("a");
        a.href=result.links.html;
        a.target="_blank";

        a.appendChild(img);
        searchresult.appendChild(a);
    })
    showbtn.style.display="block";
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchimg();
});

showbtn.addEventListener("click",()=>{
    page++;
    searchimg();
});

