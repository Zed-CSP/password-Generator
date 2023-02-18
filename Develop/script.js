// Assignment Code
var generateBtn = document.querySelector("#generate");

//initial Password Generator Function
function generatePassword() {

// Prompt user for password length
prompt("How many characters would you like your password to contain? (Must be 8-128) ");

// Prompt user for character types
prompt("Click OK to confirm including lowercase characters");
prompt("Click OK to confirm including uppercase characters");
prompt("Click OK to confirm including numeric characters");
prompt("Click OK to confirm including special characters");


















}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
