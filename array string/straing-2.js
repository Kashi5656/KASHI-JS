let x=[2,3,1,4,5,78,9,6];


for(let i=0; i<x.length; i++)
{
       for(j=i+1; j<x.length; j++)
       {
               if(x[i]>x[j])
               {
                let temp=x[i];
                x[i]=x[j];
                x[j]=temp;
               }

       }
}

document.write(x);