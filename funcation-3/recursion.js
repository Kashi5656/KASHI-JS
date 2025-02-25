function factorial(n)
{
    if (n>1)
    {
        return n*factorial(n-1);
    }else
    {
        return 1;
    }
}

let x=prompt("entar numbr");
let answer=factorial(x)
document.write(x +" fctorial is "+ answer);