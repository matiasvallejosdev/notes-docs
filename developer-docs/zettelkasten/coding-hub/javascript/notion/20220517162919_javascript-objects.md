# Objects

Tags: #dictonaries

**Inspired by**
- [..]()

**Links**
- [..]()

## Content

Objects in JavaScript are quite flexible and can be used to create key-value pairs. These objects are quite similar to dictionaries and work alike.

Dictionaries are commonly used as each value stored has a unique key, and through these keys, their respective values can be accessed. This allows a lot of flexibility while reading and storing data.

```javascript

let dict = {
  'Name': 'John',
  'Age': 30,
  'City': 'New York'
};

dict['Age'] = 29;
```

### Objects

JavaScript objects are variables that contain multiple data values. The values within a JS object are known as properties. Objects use keys to name values, much like how is done with variables.

Let’s look at another example. This time let’s think about a course you have to take. The course name is “GRA 2032”, it starts at 8:00am and it ends at 10:00am. Here’s how we would turn this into an object in JavaScript:

```javascript
var course = {
       name: "GRA 2032",
       start: 8,
       end: 10
};
```

JavaScript object values are written in the format of name:value and the different pairs are separated by commas. The name:value pairs don’t have to be on different lines for the code to work, but it is much easier to read and understand the code by formatting it that way. You must also use the opening and closing curly brackets `{ }` when defining your objects.

#### A small discussion on objects

This line uses the focus() method to automatically put the text cursor into the `<input>` text field as soon as the page loads, meaning that the user can start typing their first guess right away, without having to click the form field first.

