// Assignment Code
var generateBtn = document.querySelector("#generate");

//initial Password Generator Function
function generatePassword() {

// Prompt user for password length
// parseint used to convert string to integer
let passwordLength = parseInt(prompt("How many characters would you like your password to contain? (Must be 8-128) "));

// Prompt user for character types
let includeLowercase = comfirm("Click OK to confirm including lowercase characters");
let includeUppercase = confirm("Click OK to confirm including uppercase characters");
let includeNumbers = confirm("Click OK to confirm including numeric characters");
let includeSpecial = confirm("Click OK to confirm including special characters");

// set constant strings for each character type  
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const special = "!@#$%^&*";








}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
