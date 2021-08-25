function Pattern(){
    
    // var n = Number(document.getElementById("h1").value);

    // console.log(n)

    for(var i=1; i<=5; i++)
    {
        for(var j=1; j<=9; j++)
        {
            if(j>=6-i && j<=4+i){
                document.write("* ");
            } 
            else
            {
                document.write("&nbsp;&nbsp;&nbsp");
            }
        }
        document.write("<br/>");
    }
}

document.getElementById("btn").addEventListener("click", Pattern);