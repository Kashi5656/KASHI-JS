function armstrong(n){

    let count = 0;
    let num =n;
    let result = 0;

    while(num>0)
    {
        num = Math.floor(num/10);
        count++;

    }
    num=n;

    for(let i=1; i<=count; i++)
    {
        let last = num % 10;
        let  mul = 1;
        for(let j=1; j<=count; j++)
        {   
            mul*=last;

        }
        result +=mul;
        num= Math.floor(num/10);
    }

    if(result==n)
    {
        document.write("numbar is amstrong");
    }else{
        document.write("numbar is not amstrong");
    }
}

let n=prompt("entar numbar ");

armstrong(n);