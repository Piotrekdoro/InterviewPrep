/*Find the Symmetric Difference

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of
the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an
expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation
at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference.
The returned array must contain only unique values (no duplicates).
*/


function sym(args) {

    function deleteDuplicates(arr) {
      return arr.filter((num,index,arr) => index===arr.indexOf(num))
    }
    
    let symDif=deleteDuplicates(arguments[0])
    
    for (let i=1; i<arguments.length; i++) {
    symDif=symDif.concat(deleteDuplicates(arguments[i])).filter((num,index,arr) => 
           arr.indexOf(num)===arr.lastIndexOf(num))
    }
    symDif.sort((a,b) => a-b)
    
    return symDif;
    }

    console.log(sym([1, 2, 3, 3], [5, 2, 1, 4], [8, 4, 4]));