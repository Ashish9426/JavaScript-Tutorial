
setInterval(function(){
    var date=Intl.DateTimeFormat("en-Us",{dateStyle:"medium", timeStyle:"medium"})
    var dd=date.format(new Date())
    document.getElementById("box").innerHTML=dd
    
    },1000)  
console.log("================================================")
