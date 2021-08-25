function validate(){
    var age = parseInt(document.getElementById("txt").value)
    var msg = ""
    if (age >= 18){
        msg = "You are eligible for vote"
    }
    else
    {
        msg = "You are not eligible for vote but you may be eligible after "+(18-age)+" year";
    }
    document.getElementById("msg").innerHTML=msg
}

document.getElementById("btn").addEventListener("click", validate)