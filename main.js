// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. 
// Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}

max(2,33);

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    } else if(num2 > num1 && num2 > num3){
        return num2;
    } else if((num1 === num2) || (num1 === num3) || (num2 ===num3)){
        return "it's a tie!";
    } else{
        return num3;
    }
}

maxOfThree(2,3,4);

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a 
// vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    if((char === "a") || (char === "e") || (char === "i") || (char === "o") || (char === "u")){
        return true;
    }else{
        return false;
    }
}

isVowel("x");

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(num1, num2){
    return num1 + num2;
}

sum(2, 5);

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(num1, num2, num3){
   return ((num1 + num2 + num3)/3);
}

avg(2, 4, 10);

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(string){
    return string.length;
}

getLength("ericaisawesome");

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(x, y){
    if(x > y){
        return true;
    } else if (x === y){
        return "tie";
    } else{
        return false;
    }
}

greaterThan(10, 24);

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name){
    return "Hello, " + name + "!";
}

greet("Erica");

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(name, place, activity, name2, food){
    return "While " + name + " was busy partaking in " + activity + " at " + place + ", " + name2 + " " + "splattered " + food + " all over the floor." ;
}

madlib("Luke", "school", "a heated game of Avalon", "Mike", "Oliver's spaghetti");
