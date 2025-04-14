
let toastbox=document.getElementById("Toastbox");
let successMsg='<i class="fa-solid fa-check" style="color:#16a34a;"></i> Successfully sumbitted';
let errorMsg='<i class="fa-solid fa-xmark" style="color:#dc2626;"></i> Error';
let invalidMsg='<i class="fa-solid fa-exclamation" style="color:#ca8a04;"></i> Invalid Input , Checked';


function show(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML=msg;
    toastbox.appendChild(toast);

}