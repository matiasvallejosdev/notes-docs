# Loops

Tags: #for #while #do-while

**Inspired by**
- [..]()

**Links**
- [Loops Code](first-splash/loops.js)

## Content

One part of the above code that we need to take a more detailed look at is the for...of loop. Loops are a very important concept in programming, which allow you to keep running a piece of code over and over again, until a certain condition is met.

```javascript
const fruits = ['apples', 'bananas', 'cherries'];
for (const fruit of fruits) {
  console.log(fruit);
}
```

### While

Looping control flow allows us to go back to some point in the program where we were before and repeat it with our current program state. If we combine this with a binding that counts, we can do something like this:

```javascript
let number = 2;
while(number < 12){
  console.log(number);
  number+=2;
}

```

### Do While

A do loop is a control structure similar to a while loop. It differs only on one point: a do loop always executes its body at least once, and it starts testing whether it should stop only after that first execution. To reflect this, the test appears after the body of the loop.
  
```javascript
let number = 2;
do{
  console.log(number);
  number+=2;
}while(number < 12);
```

### For Loop

Many loops follow the pattern shown in the while examples. First a “counter” binding is created to track the progress of the loop. Then comes a while loop, usually with a test expression that checks whether the counter has reached its end value.

```javascript
for(let i = 0; i < 10; i++){
  console.log(i);
}
```
