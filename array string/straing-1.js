let real="nayan";

let rev="";

for(let i= real.length-1; i>=0; i--)
{
        rev+=real[i];
}

if(real==rev)
    {
            document.write("name is palindrom.");
    }
    else{
        document.write("name is not palindrom.");   
    }