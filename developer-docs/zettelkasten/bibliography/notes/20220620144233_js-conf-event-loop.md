# Javascript Event Loop

**Tags:** #event-queue #event-loop #js-enviroment

**Links**
- [What is event loop](https://youtu.be/8aGhZQkoFbQ)

## Content

Javascript is a synchronous language. This means that all the code is executed in the same thread. I have a call stack that is executed one after the other.

<img src ="https://miro.medium.com/max/1024/1*4lHHyfEhVB0LnQ3HlhSs8g.png" style="width:350px;">

The call stack is one thread of execution. One call stack is executed one after the other. 

Event loop is a queue of events that are executed one after the other. This queue is called the event queue.

Blocking is when the event queue is full and the event loop is waiting for the event to be executed. The solution is to use a callback function asynchronously.

    
```javascript
const doAsyncStuff = (a,b) => {
    const res = a + b;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done', res);
        }, 1000);
    });
}
```

The browser is not only the stack of code. It also has an event queue. This queue is called the event loop. That managae the tasks and push them to the stack. If the stack empty, the event loop is launch the pop task from the queue and the stack execute it. 