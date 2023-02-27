// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//initial Password Generator Function
function generatePassword() {

  // Prompt user for password length
  // parseint used to convert string to integer
  let passwordLength = parseInt(prompt("How many characters would you like your password to contain? (Must be 8-128) "));
  // if statement to check if password length is between 8 and 128
  // isNaN used to check (edge case) if input is a number
  console.log(passwordLength);

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  passwordLength = parseInt(prompt("Invalid input. Please enter password length (8-128 characters):"));
  }
 
  // Prompt user for character types
  let includeLowercase = confirm("Click OK to confirm including lowercase characters");
  let includeUppercase = confirm("Click OK to confirm including uppercase characters");
  let includeNumbers = confirm("Click OK to confirm including numeric characters");
  let includeSpecial = confirm("Click OK to confirm including special characters");

  // while loop to validate at least one character type
  // if all character types are false, alert user and re-prompt
  // if any character type is true, break out of loop
  // ! used to check if all character types are false, requires truthy value
  while (!(includeLowercase || includeUppercase || includeNumbers || includeSpecialChars)) {
    alert("Please select at least one character type.");
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumbers = confirm("Include numeric characters?");
    includeSpecial = confirm("Include special characters?");
  }

  // set constant strings for each character type  
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const special = "!@#$%^&*";

  // set empty string to store user selected character types
  let userCharacterSet = "";

  // if statements to add character types to userCharacterSet
  // += used to add to string
  if (includeLowercase) {
    userCharacterSet += lowerCase;
  }
  if (includeUppercase) {
    userCharacterSet += upperCase;
  }
  if (includeNumbers) {
    userCharacterSet += numeric; 
  }
  if (includeSpecial) {
    userCharacterSet += special; 
  }

  // set empty string to store password
  let password = "";
  // for loop to generate password
  // i = 0 used to set initial value of i
  // i < passwordLength used to determine when to stop loop, passwordLength serves as the maximum length of password and will exit the loop.
  // i++ used to increment i by 1 after each loop
  for (let i = 0; i < passwordLength; i++) {
    // math.random used to generate random number between 0 and 1
    // math.random * userCharacterSet.length used to scale math.random's 0-1 to 0-userCharacterSet's length
    // math.floor used to round down decimals to nearest integer
    // .charAt used to select character at our now randomly indexed userCharacterSet's string
    password += userCharacterSet.charAt(Math.floor(Math.random() * userCharacterSet.length));
    console.log(password);
  }
  // console.log used to test password
  console.log(password);
  // return password
  return password;
}

// Write password to the #password input
function writePassword() {
  console.log("writePassword function called");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
