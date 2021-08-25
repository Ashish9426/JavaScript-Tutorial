function bg_change() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;

}

setInterval(bg_change, 3000);
