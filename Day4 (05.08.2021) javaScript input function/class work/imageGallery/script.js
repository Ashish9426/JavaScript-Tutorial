var thumb = document.querySelectorAll(".thumb img")
for(var i=0; i<thumb.length; i++)
{
    thumb[i].onmouseover = function(){
        document.querySelector(".main-image img").src = this.src
    }
}