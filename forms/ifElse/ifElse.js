// 1. Set up a new GH Desktop folder off the Desktop for your appstudio project. 

// 2. Create a new appStudio project named A2YourName.project in the folder 
// inside the GitHub folder you made above.

// 3. In GH Desktop, create a new repository for the project and connect to the 
// A2YourName.project folder.

// 4. In GH Desktop, create a new branch to capture the new code you write in the project.

// 5. As you work, commit changes to the branch and now and then publish(upload) the branch
// to the repository.

/*
6. Scenario: Create a program that will get the users' state (2 letters, capitalized eg. NE) 
and current outside temperature (F). Then it will give them a personalized recommendation about 
clothing they should wear. These messages are stored in an array. Each message is an item in the 
array. You will create two versions of the program - one using if/else statement(s) and one using 
switch statement(s). Put each program on a different form in the same project. 
*/

let name = prompt("Enter your name")
let state = prompt("Enter your state's 2-letter code (capitalized)")
let temperature = prompt("Please enter the current temperature outside (in Fahrenheit)")
let messages = ["wear a warm coat, hat, scarf, and gloves.", "wear a warm coat but you won't need a hat, scarf, or gloves.", "wear your warmest coat, a hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]

/*
console.log(stateArray)
console.log(temperatureArray)
*/

// 7. Requirements
// a. Name the first program form ifElse. Use if/else statements - no switch.
// b. Name the second program form switch, Use a switch statement.
// c. Use variables to hold these data:
// > the user's first name
// > the user's state (2 letters)
// > the user's temperature (number) in Fahrenheit
// > an array that is holding all of the messages
// d. all variable names must be camelcase (likeThis) and reflect what they are holding
// e. all messages are stored in an array named 'messages', one per location.
// f. all output must be via console, not alerts, using template literals.
// g. all outputs should be nicely formatted and addressed to the user:
//     eg. Mary, blah blah blah.
// h. below are the messages to output based on the state and temperature received from the user. 
// messages cannot be hard-coded (that is, typed into the program where needed for output).


if (state == "NE" && temperature < 32) { 
  console.log(`${name}, ${messages[0]}`)
 } else if (state == "NE" && temperature > 32 && temperature < 50) { 
  console.log(`${name}, ${messages[1]}`)
 } else if (state == "FL" && temperature > 32 && temperature < 50) { 
  console.log(`${name}, ${messages[2]}`)
 } else if (state == "FL" && temperature > 50 && temperature < 70) { 
  console.log(`${name}, ${messages[3]}`)
 } else {
  console.log("For your state, I have no advice")
 }











