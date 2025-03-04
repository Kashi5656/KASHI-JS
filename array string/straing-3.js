let x=[2,3,1,4,5,78,9,6];

let max=x[0];

// for(let i=0; i<x.length; i++)
// {
//        if(max<x[i])
//        {
//          max=x[i];
//        }
// }

// document.write(max + "is miximum");

for(let i=0; i<x.length; i++)
    {
           if(max>x[i])
           {
             max=x[i];
           }
    }
    
    document.write(max + "is minimum");