var items = [
    [['firstName', 'Joe'],['lastName', 'Blow'],['age', 42], ['role', 'clerk']], 
    [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]
];

var result = [];

items.forEach(function(item)
{
   var obj = {};
   
   item.forEach(function (value)
   {
      
      obj[value[0]] = value[1];
   });

   
   result.push(obj);

   
});

console.log(result);
// document.write(result)

// for(var i=0; i<result.length; i++)
//    {
//        for(j=0; j<result[i].length; j++)
//        {
//         //    ducument.write(result[i][j]+" ")
//         console.log(result[i][j])
//        }
//        document.write("<br/>")
//    }





 