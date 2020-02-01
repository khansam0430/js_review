// # Loops, Arrays, and Concatenation Checkpoint
// Create a function that takes two parameters. The first parameter is an array, 
// the second parameter will be a number.

// // Your function should return a string that combines all of the values starting
//  at the index of the number passed in through the end of the array.

// ## Examples:

// ### Example 1

// ```
// console.log(yourFunction(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 3));
// ```

// should log 

// ```
// Hi There!
// ```

// ### Example 2

// ```
// console.log(yourFunction(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 2));
// ```

// should log


// ```
// Oh! Hi There!
// ```
function arrayFromIndex( myArray, startingIndex){
    console.log('in arrayFromIndex:', myArray, startingIndex );

    ///-full array test
    let stringToReturn = '';
    for(let i=startingIndex; i < myArray.length; i++ ){
        //return a string that combines all of the values
        stringToReturn += myArray[ i ] + ' ';
    } //end for
    return stringToReturn;
}//end funtion
//run tests
console.log(arrayFromIndex( ['asdf', 'qwer', 'sdfasd', '1234' ], 2));