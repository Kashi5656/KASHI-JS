let time=document.getElementById("time");
let date=document.getElementById("date");

let week=["monday","teusday","wednesday","thursday","friday","saturday","sunday"];

function clock(){
    const now = new Date();

     date.innerHTML=now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear()+"/"+ (week[now.getDay()-1].toString());
    
   

     time.innerHTML=now.getHours()+":"+now.getMinutes()+":"+now.getMilliseconds();
    
}
setInterval(clock,1000);
clock();

// let time = document.getElementById("time");
// let date = document.getElementById("date");

// let week = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

// function clock() {
//     const now = new Date();

//     let day = week[now.getDay()];
//     let dayNum = now.getDate().toString().padStart(2, '0');
//     let month = (now.getMonth() + 1).toString().padStart(2, '0');
//     let year = now.getFullYear();

//     let hours = now.getHours().toString().padStart(2, '0');
//     let minutes = now.getMinutes().toString().padStart(2, '0');
//     let seconds = now.getSeconds().toString().padStart(2, '0');

//     date.innerHTML = `${dayNum}/${month}/${year} (${day})`;
//     time.innerHTML = `${hours}:${minutes}:${seconds}`;
// }

// // Start clock immediately and run every second
// clock();
// setInterval(clock, 1000);

