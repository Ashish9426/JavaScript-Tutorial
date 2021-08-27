// function formatEmail(){
//     var email="abhishek00912@yahoo.com";
//     var arr=email.split("@")
//     var username=arr[0].substr(0,3)+"*".repeat(arr[0].length-3)+email.slice(email.indexOf("@"))
//     document.write(username)
// }

// formatEmail()




function formatEmail(){
    
    var email = document.getElementById("h1").value;
    // var email="abhishek00912@yahoo.com";

    var arr=email.split("@")
    var username=arr[0].substr(0,3)+"*".repeat(arr[0].length-3)+email.slice(email.indexOf("@"))
    document.write(username)

}

document.getElementById("btn").addEventListener("click", formatEmail);