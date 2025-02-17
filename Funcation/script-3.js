function tabal(n){

    for(let i=1; i<=12; i++)
    {
        for(let j=1; j<=n; j++)
            {
                document.write(j + "x" + i+ "=" + i*j + " " + " " + " "+ "&nbsp;");
            }
            document.write("<br>");
    }
}
tabal(12);