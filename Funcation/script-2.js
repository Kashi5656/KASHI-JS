function tabal(){

    for(let i=1; i<=12; i++)
    {
        for(let j=1; j<=5; j++)
            {
                document.write(j + "x" + i+ "=" + i*j + " " + " " + " "+ "&nbsp;");
            }
            document.write("<br>");
    }
    document.write("<br>");
    for(let i=1; i<=12; i++)
        {
            for(let j=6; j<=10; j++)
                {
                    document.write(j + "x" + i+ "=" + i*j + " " + " " + " "+ "&nbsp;");
                }
                document.write("<br>");
        }

}

tabal();