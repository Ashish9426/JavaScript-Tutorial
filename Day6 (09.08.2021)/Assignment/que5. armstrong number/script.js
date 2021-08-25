function ArmstrongNumber(){
    var n = parseInt(document.getElementById("n1").value);
    
    var sum = 0;
    var temp = n;
    
    while(n != 0)
    {
        var rem = n%10;
        sum = sum + rem*rem*rem;
        n = parseInt(n/10);
    }

    if(temp == sum)
    {
        document.write("ArmStrong Number")
    }
    else{
        document.write("Not ArmStrong Number")
    }
    
}
document.getElementById("btn").addEventListener("click", ArmstrongNumber)