function get(val)
{
    document.getElementById("text").value+=val;
}

function clr()
{
   document.getElementById("text").value=" ";
}

function equation()
{
   let x= document.getElementById("text").value;

   let y=eval(x);

   document.getElementById("text").value=y;

}
