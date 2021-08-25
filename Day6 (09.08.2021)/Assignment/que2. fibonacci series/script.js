function FiboSeries(){
    var i = 1
    var n = parseInt(document.getElementById("n1").value);
    var t1 = 0;
    var t2 = 1;


    while(i<=n)
    {
        document.write(t1)
        var nextTerm = t1+t2;
        t1=t2;
        t2=nextTerm
        i++
    }
    
}
document.getElementById("btn").addEventListener("click", FiboSeries)