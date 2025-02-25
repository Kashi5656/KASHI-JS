function numbar(n,start)
{
    
    if(n<start)
    {
       
        return;
        
       
    }
    document.write( start +" ");

    numbar(n,start+1);
   
}

let x=prompt("entar numabr : ");

numbar(x,1);



