1) What is the difference between var, let, and const?

The primary differences between var, let, and const in JavaScript are their scoping rules (function vs. block scope) and reassignment/redeclaration capabilities. var is function-scoped, allowing reassignment and redeclaration, while let and const are block-scoped. let allows reassignment but not redeclaration, whereas const disallows both reassignment and redeclaration after initialization, though mutable data structures like objects and arrays can still have their internal contents changed.  


2) What is the difference between map(), forEach(), and filter()?

forEach():
To iterate over each element of an array and perform a side effect (e.g., logging to the console, modifying an external variable).

map():
To transform each element of an array and create a new array containing the transformed elements.

filter():
To create a new array containing only the elements from the original array that satisfy a specified condition.


3) What are arrow functions in ES6?

Arrow functions, introduced in ECMAScript 2015 (ES6), provide a concise syntax for writing function expressions in JavaScript. They offer a more streamlined way to define functions compared to traditional function expressions, particularly useful for short, anonymous functions and callbacks. 


4) How does destructuring assignment work in ES6?

Destructuring assignment in ES6 is a JavaScript expression that allows unpacking values from arrays or properties from objects into distinct variables. It offers a more concise and readable way to extract data compared to traditional methods. 
How it works:

1. Array Destructuring:
(a) Values are extracted from an array based on their position (index).
(b)The syntax uses square brackets [] on the left-hand side of the assignment.
(c)Can skip elements using commas.
(d)The rest parameter (...) can capture remaining elements into a new array.

2. Object Destructuring:
(a)Properties are extracted from an object based on their property names.
(b)The syntax uses curly braces {} on the left-hand side of the assignment.
(c)Can assign to different variable names using a colon.
(d)Default values can be provided for properties that might not exist.


5) Explain template literals in ES6. How are they different from string concatenation?

Template literals in ES6:
Template literals, introduced in ES6 (ECMAScript 2015), offer a more flexible and readable way to work with strings in JavaScript compared to traditional string concatenation. They are enclosed by backticks (``) instead of single or double quotes. 

Template literals and string concatenation are both methods for combining strings and variables, but they differ significantly in syntax, readability, and functionality.
In essence, template literals offer a more modern, flexible, and readable approach to string manipulation in JavaScript compared to traditional string concatenation, particularly for dynamic and multiline strings.



