function sum(n)
{
    if (n>0)
    {
        return n+sum(n-1);
    }else
    {
        return 0;
    }
}

let x=prompt("entar numbar : ");
let n=parseInt(x);
let ans=sum(n);
document.write("the sum of "+ n +"is" +ans);