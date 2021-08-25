var a = [
    [12,13,14,15],
    [42,43,44,45,46,47,48,50],
    [24,25,26,23,28,30]
];

// for(var i=0; i<a.length; i++)
// {
//     for(var j=0; j<a[i].length; j++)
//     {
//         console.log(a[i][j] );
//         document.write(a[i][j]+" ");
//     }
//     document.write("<br/>") 
// }

a.forEach(function(row){
    row.forEach(function(col){
        // document.write(col);
        console.log(col);
    });
    document.write("<br/>")
})


 