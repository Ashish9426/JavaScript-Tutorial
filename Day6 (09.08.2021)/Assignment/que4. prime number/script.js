function PrimeNumber(){
    var n = parseInt(document.getElementById("n1").value);

    var i = 2;
    var count = 0;


    while(i <= n/2)
    {
        if(n%i == 0)
        {
            count = 1;
            break;
        }
        i++; 
    }
    if(count == 0)
    {
        document.write("Prime Number")
    }
    else
    {
        document.write("is Not Prime Number")
    }
    
}
document.getElementById("btn").addEventListener("click", PrimeNumber)