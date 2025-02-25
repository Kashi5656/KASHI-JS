function numbar(n,start)
{
    
    if(n<start)
    {
       
        return;
        
       
    }
    document.write( n +" ");
    numbar(n-1,start);
   
}

let x=prompt("entar numabr : ");

numbar(x,1);