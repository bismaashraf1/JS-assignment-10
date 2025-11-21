
                                       //    String Method Assignment

// 1. Lowercase Name
// Write a function that takes a name as input and returns it all in lowercase.
function input(name){
    return name.toLowerCase();
}
console.log(input("FRUITES")); 

// 2. Uppercase Shouting
// Convert a given string into uppercase to simulate shouting. Example: "hello" →
// "HELLO".
let intro = "hello"
console.log(intro.toUpperCase());

// 3. Count Characters
// Given a string, return the number of characters in it.
let sentence = "Hello my nick name is Anniee";
console.log(sentence.charAt(7));

// 4. First Character
// Write a function that returns the first character of a string using charAt().
function number(num){
    return num.charAt(7);
 }
console.log(number("Study room"))
// 5. Last Character
// Return the last character of any string using .charAt() and .length.
function country(con){
return con.charAt(16);
}
    console.log(country("Hello South Korea lovers"));

function numbers(nmbrs){
    return nmbrs.length;
 }
console.log(numbers("Hello South Korea lovers"))

// 6. Find Position of Word
// Given a sentence, find the position (index) of the word "apple" using indexOf.
let basket = "I have aallot of an apple in my basket";
console.log(basket.indexOf("apple"));

// 7. Extract First Word
// Use slice() and indexOf() to extract the first word from a sentence.
let words = "The black lava cake is my favorite dessert";
console.log(words.slice(0, 4));
console.log(words.indexOf("The"));

// 8. Replace a Word
// Replace the word "bad" with "good" in a given sentence using replace().
let mood = " The movie was bad";
console.log(mood.replace("bad", "good"));

// 9. Replace All Vowels
// Replace all occurrences of vowels in a string with "*" using replaceAll().
let vowels = " a, e, i, o, u";
console.log(vowels.replaceAll("a, e, i, o, u", "*"));

// 10. Split Sentence into Words
// Convert a sentence into an array of words using split(" ").
let latters = " The taste of chocolate cake is soo bad";
console.log(latters.split(" "));

// 11. Capitalize First Letter
// Capitalize only the first letter of a given word.
let capitallatters = ("grapes");
console.log(capitallatters.slice(0, 1).toUpperCase());

// 12. Find Second Word
// Write a function that returns the second word of a sentence using split().
function secondword(two){
return two.split(" ")[1];
}
console.log(secondword("Your are my honey Bee"))

// 13. Censor a Word
// Replace all instances of a bad word like "dumb" in a string with "****".
let story = "My friend name is umama. She is very dumb because she likes dumb things like dumb people, dumb ideas, dumb relationships.";
console.log(story.replaceAll("dumb", "****"));

// 14. Count Words in Sentence
// Use .split() and .length to count how many words are in a sentence.
let work = "You are my universal friend";
console.log(work.split(" ").length);

// 15. Check if Word Exists
// Return true if a specific word (e.g., "cat") exists in a string using indexOf.
function search(word){
return word.indexOf("cat") !== -1;
}
console.log(search("My cat is very cute and fluffy"));

// 16. Extract Domain from Email
// Given an email address, extract and return the domain name (everything after @).
function emailadress(email){
return email.slice(12);
}
console.log(emailadress("anyashraf550@gmail.com"));


// 17. Reverse Words in Sentence
// Given a sentence, split it into words, reverse the array, and join it back into a string.
let sentns = "My best hobie is to paint asthetic things or objects";
console.log(sentns.split(" ").reverse().join(" "));

// 18. Check Palindrome (Basic)
// Write a function that checks if a word is the same when reversed (ignore case).
function samewords(word){
    let smallatters = word.toLowerCase();
    let reversedlatters = smallatters.split(" ").reverse().join(" ");    
    return smallatters === reversedlatters;
}
console.log(samewords("Hello"));

// 19. Mask Email Address
// Convert an email like john.doe@example.com to j***@example.com.
let email = "john.doe@example.com";
console.log(email.replace("ohn.doe" ,"***"));

// 20. Alternate Case Converter
// Convert a string to alternating case (e.g., "hello" → "HeLlO").


function alternate(case1){
return case1.charAt(0).toUpperCase() + case1.charAt(1).toLowerCase() + case1.charAt(2).toUpperCase() + case1.charAt(3).toLowerCase() + case1.charAt(4).toUpperCase();
}
console.log(alternate("hello"));