let input=document.getElementById("value");
let city=document.getElementById("city");
let temperature=document.getElementById("temperature");
let description=document.querySelector(".description");
let clouds=document.getElementById("clouds");
let humidity = document.getElementById("Humidity");
let pressure=document.getElementById("pressure");
let form=document.querySelector("form");
let main=document.querySelector("main")

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(input.value!=''){
        searchWheather();
    }
})

let id="9dc6152f87323e0eee69f9e85495787d";
let url = "http://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + id;

const searchWheather=()=>{
    fetch(url + "&q=" + input.value).then((response)=>response.json()).then((data)=>{
        if(data.cod==200){
            city.querySelector("figcaption").innerText=data.name;
            city.querySelector("img").src="http://flagsapi.com/"+data.sys.country+"/shiny/32.png";
            temperature.querySelector("img").src="http://openweathermap.org/img/wn/"+data.weather[0].icon+"@4x.png";
            temperature.querySelector("figcaption span").innerText = data.main.temp;
            description.innerText=data.weather[0].description;
            clouds.innerText=data.clouds.all;
            humidity.innerText=data.main.humidity;
            pressure.innerText=data.main.pressure;

        }else{
            main.classList.add('error');
            setTimeout(()=>{
                main.classList.remove('error');
            },2000)
        }

        input.value="";
    })
}
const initapp=()=>{
    input.value="india";
    searchWheather();
}
initapp();