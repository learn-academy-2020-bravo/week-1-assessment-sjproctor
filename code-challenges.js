// ASSESSMENT 1: Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212
// Create a function that looks for three outcomes - over, under, exactly boiling point

const tempChecker = (number) => {
  // exacly boiling point, the most specific
  if(number === 212){
    return `${number} is at boiling point.`
  // below boiling
  } else if(number < 212){
    return `${number} is below boiling point. `
  // above boiling
  } else if(number > 212){
    return `${number} is above boiling point.`
  } else {
    return "error"
  }
}
console.log(tempChecker(temp1))
console.log(tempChecker(temp2))
console.log(tempChecker(temp3))


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

// function takes in an array returns an array, uses for to mult by 5
const mult5 = (array) => {
  // create a holding array
  let newArray = []
  // loop over the array and multiply by 5
  for(let i=0; i<array.length; i++){
    // push the result
    newArray.push(array[i] * 5)
  }
  // return the array
  return newArray
}
console.log(mult5(myNumbers1))



// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

// create a function, take in an array, return an array, mult by 5
const mult5WithMap = (array) => {
  return array.map(value => value * 5)
  // taking in array, mapping, returning the array
  // return array.map(value => {
  //   // returning the value mult by 5
  //   return value * 5
  // })
}
console.log(mult5WithMap(myNumbers2))

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

// create a function that takes in a string, removes vowels
const vowelKicker = (string) => {
  // splitting the array
  let splitString = string.split("")
  let filteredArray = splitString.filter(value => {
    let vowel = value.toLowerCase()
    return vowel !== "a" && vowel !== "e" && vowel !== "i" && vowel !== "o" && vowel !== "u"
  })
  return filteredArray.join("")
}
console.log(vowelKicker(stringWithVowels1))
console.log(vowelKicker(stringWithVowels2))

// declaring a function, takes a string, and returns a string without vowels
const noVowels = (string) => {
  let vowels = ["a", "e", "i", "o", "u"]
  let splitString = string.split("")
  let filtered = splitString.filter(letters => !vowels.includes(letters.toLowerCase()))
  return filtered.join("")
}
console.log(noVowels(stringWithVowels1))
console.log(noVowels(stringWithVowels2))



// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42

const noVowelsWithEdgeCase = (string) => {
  if(typeof string === "string"){
    let vowels = ["a", "e", "i", "o", "u"]
    let splitString = string.split("")
    let filtered = splitString.filter(letters => !vowels.includes(letters.toLowerCase()))
    return filtered.join("")
  } else {
    return "Error, please enter a string."
  }
}
console.log(noVowelsWithEdgeCase(notAString1))
console.log(noVowelsWithEdgeCase(stringWithVowels1))
console.log(noVowelsWithEdgeCase(notAString2))


// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// create afunction that takes an array of objects and returns an array of objects that are cats
const getCats = (array) => {
  return array.filter(value => {
    return value.animal === "cat"
  })
}
console.log(getCats(toonimals))

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

// create a function that takes an array of objects and returns the string of the non-cat names
const getNonCatNames = (array) => {
  let nonCats = array.filter(value => {
    return value.animal !== "cat"
  })
  let nonCatNames = nonCats.map(value => {
    return value.name
  })
  return nonCatNames.join(" ")
}
console.log(getNonCatNames(toonimals))
