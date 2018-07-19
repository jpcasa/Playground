// // PALINDROMES
//
// const stringToCheck = '1234';
//
// function palindrome(string) {
//   let newString = string.split('').reverse().join('');
//   if(string === newString) {
//     return true
//   } else {
//     return false
//   }
// }
//
// let checkString = stringToCheck;
// let palindromes = [];
//
// while (0 < checkString.length) {
//   let testString = '';
//   for (var i = 0; i < checkString.length; i++) {
//     testString += checkString[i];
//     if (palindrome(testString)) {
//       palindromes.push(testString);
//     }
//   }
//   checkString = checkString.slice(1);
// }
//
// console.log(palindromes);

var originalString = "1234";

function palindrome(string){
  var newString = string.split('').reverse().join('');
  if (string === newString){
    return true;
  }else {
    return false;
  }
}

var string = originalString;
while (0 < string.length){
  var testString = '';
  for (var i = 0; i < string.length; i++ ){
    testString += string[i];
    if (palindrome(testString)){
    console.log("this is a palindrome: " + testString);
    }
  }
  string = string.slice(1);
}
