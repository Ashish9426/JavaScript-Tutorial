function Pattern(){
    
    var n = Number(document.getElementById("h1").value);

    // console.log(n)

    for(i=1; i<=n; i++)
    {
        for(j=5; j>=i; j--)
        {
            document.write(j);
        }
        document.write("<br/>");
    }


}

document.getElementById("btn").addEventListener("click", Pattern);