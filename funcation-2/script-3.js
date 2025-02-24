function nNum(n)
{
    let a=n;
   
    for(let i=(n-1); i>=1; i--)
    {
        n=n*(i);
       
        
    }
    document.write(n +"numbar factorial is : "+ a );
}
let x=prompt("entar value : ");

let n=parseInt(x);
nNum(n);
