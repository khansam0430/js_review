console.log('Hello');

let friendsArray = [];
let workFriends = [
  {
    name: 'Dev',
    food: 'pizza'
},
{
  name: 'Mary',
  food: 'salad'
},
 {
   name: 'Dane',
   food: 'gyros'
 }
]
//camelcase=starting with lowercase letter and turning new word first letter
//capital. Pascal case is capital first letter per word. ex FriendsArray
//create addFriends function below:
function addFriends(nameParam, foodParam) {
    let friendObject = {
      name: nameParam,
      food: foodParam
    };
    //declare object literal in function
    friendsArray.push(friendObject);
    //push objects into array--"where you want to push".push"(where you want to push)"

    return("does this work?", friendObject);
};//return to see if this works and get output
//end addFriends function

addFriends('Samreen', 'pasta');
addFriends('Melinda', 'noodles');
addFriends('Shawn', 'pina colada');
addFriends('Kyle', 'omlettes')
//call parameters into function

console.log("this is friendsArray", friendsArray);

function loopThroughArray(arrayToLoop) {
  for(let i= 0; i < arrayToLoop.length; i++){
    console.log(arrayToLoop[i].name + "'s favorite food is: " +
     arrayToLoop[i].food);
  }//loop through array and console log name and food to see if it runs
}//arrayToLoop is added because your using both arrays (friendsArray and workFriends)
loopThroughArray(friendsArray);
loopThroughArray(workFriends);
//run function call both arrays since you have 2 arrays
