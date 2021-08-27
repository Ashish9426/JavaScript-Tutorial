function Pattern(){
    
    // var n = Number(document.getElementById("h1").value);

    // console.log(n)
    var k = 3;

    for(var i=1; i<=4; i++)
    { 
        for(var j=1; j<=k; j++)
        {
                document.write("&nbsp;&nbsp;&nbsp"); 
        }

        for(var p=1; p<=i; p++)
        {
            document.write(" "+(p%2)+" ");
        }
        k--;

        document.write("<br/>");
    }
}

document.getElementById("btn").addEventListener("click", Pattern);