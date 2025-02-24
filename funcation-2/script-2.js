function prime()
{
   let a=0;

   if(n<=1)
   {
        document.write(n+"is not a prime numbar");
   }
   for(let i=1; i<=n; i++)
   {
    if(n%i==0)
    {
        a++;
    }
   }
   if(a==2)
   {
    document.write(n+"is a prime numbar");
   }
   else{
    document.write(n+"is not a prime numbar");
   }
}

let x=prompt("entar a numbar : ");
let n=parseInt(x);

prime(n);