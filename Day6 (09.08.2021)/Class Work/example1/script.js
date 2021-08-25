function Table(){
    var i = 1
    var n = parseInt(document.getElementById("n1").value);

    while(i<=10)
    {
        var t = n*i
        document.write("<br/>"+n+"x"+i+"="+t)
        // document.getElementById("msg").innerHTML=document.write("<br/>"+n+"x"+i+"="+t)
        i++
    }
    
}
document.getElementById("btn").addEventListener("click", Table)