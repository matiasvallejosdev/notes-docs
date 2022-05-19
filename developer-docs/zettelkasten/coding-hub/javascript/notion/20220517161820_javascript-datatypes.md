# Data Types

Tags: #datatypes

**Inspired by**
- [Javascript Definition](20220517161029_javascript-definition.md)

**Links**
- [Data Types Code](../first-splash/data-types.js)
- [MDN Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

## Content

Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

**Dynamic typing**

JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

```javascript
let foo = 42;    // foo is now a number
foo     = 'bar'; // foo is now a string
foo     = true;  // foo is now a boolean
```

The set of types in the JavaScript language consists of primitive values and objects.

- **Primitive values** (immutable datum represented directly at the lowest level of the language)
  - Boolean type
  - Null type
  - Undefined type
  - Number type
  - BigInt type
  - String type
  - Symbol type
  - Arrays
- **Objects** (collections of properties)
