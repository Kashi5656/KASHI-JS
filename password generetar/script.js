const passwordBox=document.getElementById("password");
const lenght=8;

const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const numbar="0123456789";
const symbol="@#$%!+*&^]}{[<>/-=";

const all=uppercase+lowercase+numbar+symbol;

function generatePassword(){
    let password=""
    password+=uppercase[Math.floor(Math.random()*uppercase.length)]
    password+=lowercase[Math.floor(Math.random()*lowercase.length)]
    password+=numbar[Math.floor(Math.random()*numbar.length)]
    password+=symbol[Math.floor(Math.random()*symbol.length)]

    while(lenght>password.length)
    {
        password+=all[Math.floor(Math.random()*all.length)]
    }
    passwordBox.value=password;
    
}

function copy(){
    passwordBox.select();
    document.execCommand("copy");
}