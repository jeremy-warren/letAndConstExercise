

/*
What is the difference between var and let?
What is the difference between var and const?
What is the difference between let and const?

    Let and const both let you declare variables at the block level, while var works at the function level or larger.
    Let and var can both be reassigned, while const cannot. 
    When hoisted, only var gets a default value set. The others will throw an error if used before being initialized.

What is hoisting?

    Allowing functions to reference variables in the code before the variables are actually declared.

*/

// var PI = 3.14;
// PI = 42; // stop me from doing this!

const PI = 3.14;
//PI = 42 doesn't work now.