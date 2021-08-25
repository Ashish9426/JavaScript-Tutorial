
function stringPolindrome(){
    
    // var string = document.getElementById("h1").value;
    var string = prompt('Enter a string or number: ');

    // console.log(string)

    var arrayValues = string.split('');
    var reverseArrayValues = arrayValues.reverse();
    var reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        // console.log('It is a palindrome');
        alert('It is a palindrome')
    }
    else {
        // console.log('It is not a palindrome');
        alert('It is not a palindrome')
    }


}

document.getElementById("btn").addEventListener("click", stringPolindrome);

