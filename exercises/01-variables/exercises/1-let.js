'use strict';

// practice using variables declared with let
//  fill in the blanks to log the commented values
// and don't just write the correct answer directly!
//  you should use firstFiveLetters to fill in one blank for each step

let firstFiveLetters = 'c';
console.log(firstFiveLetters); // should log "c"

let secondFiveLetters = 'b'+ firstFiveLetters;
console.log(secondFiveLetters); // should log "bc"

let thirdFiveLetters = 'b' + firstFiveLetters + 'd';
console.log(thirdFiveLetters); // should log "bcd"

let forthFiveLetters = 'a' + 'b' + firstFiveLetters + 'd';
console.log(forthFiveLetters); // should log "abcd"

let fifthFiveLetters = 'a' + 'b' + firstFiveLetters + 'd'+ 'e';
console.log(fifthFiveLetters); // should log "abcde"
