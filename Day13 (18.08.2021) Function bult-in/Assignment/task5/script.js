
function abbriName() {

    var name = document.getElementById("h1").value;

    // var name = "Ashish Mishra"

    var split_names = name.trim().split(" ");


    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
}

document.getElementById("btn").addEventListener("click", abbriName);