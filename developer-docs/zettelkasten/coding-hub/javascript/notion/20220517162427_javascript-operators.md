# Operators

Tags: #operators

**Inspired by**
- [..]()

**Links**
- [Operators Code](../first-splash/operators.js)
- [Program Structure Exercises](../samples/eloquent-exercises/e-ch-2-program-structure.js)

## Content

JavaScript operators allow us to perform tests, do math, join strings together, and other such things.

- `+`	Addition	`6 + 9`
- `-`	Subtraction	`20 - 15`
- `*`	Multiplication	`3 * 7`
- `/`	Division	`10 / 5`
  
When we are running true/false tests (for example inside conditionals — see below) we use comparison operators. For example:

- `===`	Strict equality (is it exactly the same?)	
  
```javascript
5 === 2 + 4 // false
'Chris' === 'Bob' // false
5 === 2 + 3 // true
2 === '2' // false; number versus string
```

- `!==`	Non-equality (is it not the same?)	
```javascript
5 !== 2 + 4 // true
'Chris' !== 'Bob' // true
5 !== 2 + 3 // false
2 !== '2' // true; number versus string
```

- `<`	Less than	
```javascript
6 < 10 // true
20 < 10 // false
```

- `>`	Greater than	
```javascript
6 > 10 // false
20 > 10  // true
```

#### Comparation Operators

Are used to compare two expression that return a boolean value (true or false). It is often used in conditionals and represent the relationship between two values.

#### Logic Operators

Are used to return a result if the condition is true or false, the result is boolean value and can be used in conditionals.

#### Equal = vs == vs ===

|=	|==	|===|
|---|---|---|
|= in JavaScript is used for assigning values to a variable.	|== in JavaScript is used for comparing two variables, but it ignores the datatype of variable.|	=== is used for comparing two variables, but this operator also checks datatype and compares two values.|
|It is called as assignment operator	|It is called as comparison operator	|It is also called as comparison operator|
|The assignment operator can evaluate to the assigned value|	Checks the equality of two operands without considering their type.|	Compares equality of two operands with their types.|
|== will not compare the value of variables at all.	|The == checks for equality only after doing necessary conversations.	|If two variable values are not similar, then === will not perform any conversion.|