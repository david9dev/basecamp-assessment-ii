/**
 * #1
 *
 * Create an object called 'me' that has three keys, 'firstname', 'age', and 'state'.
 * Assign the keys the appropriate values.
 */

// CODE HERE

var me = 
{
  firstname: "David",
  age: 24,
  state: "Stressed"
}

/**
 * #2
 *
 * Add a new key/value pair to the 'me' object using dot notation.
 * The new key should be 'faveColor'. Set it to your favorite color as a string.
 */

// CODE HERE
me.faveColor = "Blue";

/**
 * #3
 *
 * Below is an object, 'message'. Below it, add a 'text' key using bracket notation,
 * and assign it a string of whatever you would like.
 */

// DON'T TOUCH THE CODE BELOW
var message = {
  date: new Date(),
  userName: me.firstname
};
// DON'T TOUCH THE CODE ABOVE
// CODE HERE
message["text"] = "Some sample text";

/**
 * #4
 *
 * Create an object called 'adjustCount' and create two methods. One called 'upVote' and one called 'downVote'.
 * upVote() should take in a number, add one to it, and return the number.
 * downVote() should take in a number, subtract one from it, and return the number.
 */

// CODE HERE
var adjustCount = 
{
  upVote: function(num)
  {
    num += 1;
    return num;
  },
  downVote: function(num)
  {
    num -= 1;
    return num;
  }
}
/**
 * #5
 *
 * Create an array called 'myFriends' with four of your friends names.
 */

// CODE HERE
var myFriends = ["Josh","Jayce","Charles","Willie"];

/**
 * #6
 *
 * Add a fifth friends name to the end of your 'myFriends' array.
 */

// CODE HERE
myFriends.push("Ann-Marie");

/**
 * #7
 *
 * Create a 'myArrayCopy' variable. It should equal the 'myArray' variable.
 * Use a built-in JavaScript method to create a copy.
 */

// DON'T TOUCH THE CODE BELOW
var myArray = [1, 2, 3, 4];
// DON'T TOUCH THE CODE ABOVE
// CODE HERE
var myArrayCopy = myArray;

/**
 * #8
 *
 * Below is an array, 'myNumbers'. Create a function called 'evensOnly'
 * that returns an array of only even numbers.
 */

//DON'T TOUCH THE CODE BELOW
var myNumbers = [333, 1, 4, 5, 511, 34, 88, 77, 222];
//DON'T TOUCH THE CODE ABOVE
function evensOnly() {
  // CODE HERE
  let filterFunc = function(curVal)
  {
    return curVal%2 === 0;
  }
  return myNumbers.filter(filterFunc);
}

/**
 * #9
 *
 * Using .filter(), return only your friends of the array of people below.
 * Assign it to a variable called 'trueFriends'.
 */

// CODE HERE
var peopleIknow = [
  { name: "Steve", friend: true },
  { name: "Dan", friend: false },
  { name: "Bart", friend: true },
  { name: "Sarah", friend: false },
  { name: "Michelle", friend: false },
  { name: "Holly", friend: true }
];


var trueFriends = peopleIknow.filter(function (curVal)
{
  return curVal.friend;
});

/**
 * #10
 *
 * Create a function called 'indexFinder' that loops over an array and returns a new array
 * of the indexes of the array passed into the function. For example, passing the array [243, 123, 4, 12]
 * into the function would return [0,1,2,3]. Create a new variable called 'indexes' and set it to contain
 * the indexes of 'randomNumbers'.
 */

let randomNumbers = [1, 3453, 34, 456, 32, 3, 2, 0];
var indexes;
var indexFinder = function()
{
  let array = [];
  for(let i = 0; i < randomNumbers.length; i++)
  {
    array.push(i);
  }
  return array
}
indexes = indexFinder();
