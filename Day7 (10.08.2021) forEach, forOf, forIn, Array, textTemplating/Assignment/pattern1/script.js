function Pattern(){
    
    var n = Number(document.getElementById("h1").value);

    // console.log(n)

    for(var i=1; i<=n; i++)
    {
        for(var j=1; j<=n; j++)
        {  
            if(i!=j){
                document.write("* ");
            }
            else if(i==j){
                document.write(i);
            }
        }
        document.write("<br/>");
    }

}

document.getElementById("btn").addEventListener("click", Pattern);