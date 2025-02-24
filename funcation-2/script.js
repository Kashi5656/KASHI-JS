function add(a,b){
    document.write(a+"+"+b+"="+(a+b));
}
function sub(a,b){
    document.write(a+"-"+b+"="+(a-b));
}
function mul(a,b){
    document.write(a+"x"+b+"="+(a*b));
}
function div(a,b){
    document.write(a+"/"+b+"="+(a/b));
}




let x=prompt("entar numbar 1:");
let y=prompt("entar numbar 2:");
let z=prompt("Entar sum:");

let a=parseInt(x);
let b=parseInt(y);

switch(z)
{
    case "+":add(a,b);
    break;
    case "-":sub(a,b);
    break;
    case "*":mul(a,b);
    break;
    case "/":div(a,b);
    break;
    
    default:("entar valid input");

}

