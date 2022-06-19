var lowerCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()";
var passwordLengthResponse;
var lowerCaseLettersResponse;
var upperCaseLettersResponse;
var numberResponse;
var specialCharacterResponse;
var allPossibleCharacters = "";

// Ask user for number of characters for password
passwordLengthResponse = prompt(
  "How many characters would you like in your password? Choose between 8 - 128 characters."
);

// Make sure user inputs a response between 8 and 128 characters if not advise, and ask question again
while (passwordLengthResponse > 128 || passwordLengthResponse < 8) {
  alert("Your password needs to be between 8 and 128 characters.");
  passwordLengthResponse = prompt(
    "How many characters would you like in your password? "
  );
}

// Question criteria for user and makes sure the types of characters chosen by the user are included in potential password
function criteriaQuestions() {
  lowerCaseLettersResponse = prompt(
    "Do you want lowercase letters in your password? (yes or no)"
  );
  if (lowerCaseLettersResponse === "yes") {
    allPossibleCharacters = allPossibleCharacters + lowerCaseLetters;
  }

  upperCaseLettersResponse = prompt(
    "Do you want uppercase letters in your password? (yes or no)"
  );
  if (upperCaseLettersResponse === "yes") {
    allPossibleCharacters = allPossibleCharacters + upperCaseLetters;
  }

  numberResponse = prompt("Do you want numbers in your password? (yes or no)");
  if (numberResponse === "yes") {
    allPossibleCharacters = allPossibleCharacters + numbers;
  }

  specialCharacterResponse = prompt(
    "Do you want special characters in your password? (yes or no)"
  );

  if (specialCharacterResponse === "yes") {
    allPossibleCharacters = allPossibleCharacters + specialCharacters;
  }
}

criteriaQuestions();

// Response from user in lowercase to be able to work with responses
lowerCaseLettersResponse = lowerCaseLettersResponse.toLowerCase();
upperCaseLettersResponse = upperCaseLettersResponse.toLowerCase();
numberResponse = numberResponse.toLowerCase();
specialCharacterResponse = specialCharacterResponse.toLowerCase();

// If user selects no to all criteria questions then run criteriaQuestions(); function to loop the questions again
while (
  lowerCaseLettersResponse === "no" &&
  upperCaseLettersResponse === "no" &&
  numberResponse === "no" &&
  specialCharacterResponse === "no"
) {
  alert("Password has to have atleast one type of character.");
  criteriaQuestions();
}

// Actual execution of password generation
function generatePassword(length) {
  var password = "";
  for (var i = 0; i < length; i++) {
    password += allPossibleCharacters.charAt(
      Math.floor(Math.random() * allPossibleCharacters.length)
    );
  }
  return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordLengthResponse);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
