let real="pranav";

let count=1;

for(let i=0;i<real.length;i++)
{
    count=1;
    for(let j=i+1; j<real.length;j++)
    {
        if(real[i]==real[j])
        {
            count++;
        }
        
    }
    document.write(real[i]+"-"+count+"<br>");
    
}
