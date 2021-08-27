function Pattern(){
    
    var n = Number(document.getElementById("h1").value);

    // console.log(n)
    for(i=5; i>=1; i--)
    { 
        for(j=i; j>=1; j--)
        {
            document.write(j);
        }
        document.write("<br/>");
    }
}

document.getElementById("btn").addEventListener("click", Pattern);