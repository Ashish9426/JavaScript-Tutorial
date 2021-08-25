var items = []

function AddItems(){
    var txt = document.getElementById("txt").value;
    items.push(txt)
    BindItem(items)
}

document.getElementById("btn").addEventListener("click", AddItems)

function BindItem(arr){
    var temp = ``;

    // var temp = "";
    arr.forEach(e => {
        temp += `<li> ${e} </li>`

        // temp += "<li>"+e+"</li>"

    });

    document.getElementById("list").innerHTML = temp
}