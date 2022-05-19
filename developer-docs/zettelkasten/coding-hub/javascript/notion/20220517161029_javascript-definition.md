# Javascript Definition

Tags: #tag1 #tag2 #tag3

**Inspired by**
- [..]()

**Links**
- [Overview Code](../samples/what-is-js/index.html)
- [Program Structure Exercises](../samples/eloquent-exercises/e-program-structure.js)

## Content

The three layers build on top of one another nicely. Let's take a simple text label as an example. We can mark it up using HTML to give it structure and purpose:

### What can it really do?

The core client-side javascript consists of some common programming features like:

- Store values.
- Operations on piece of text.
- Running code in response to certain events.
- Whatever you want.

APIs provides extra superpowers to javascript code and you could use it in backend and front-end. APIs are ready-made sets of code building blocks that allow a developer to implement programs that would otherwise be hard or impossible to implement. 

<img src="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript/browser.png" style="height:300px">

### Browers APIs

- The DOM (Document Object Model) API allows you to manipulate HTML and CSS, creating, removing and changing HTML, dynamically applying new styles to your page, etc. Every time you see a popup window appear on a page, or some new content displayed (as we saw above in our simple demo) for example, that's the DOM in action.
- The Geolocation API retrieves geographical information. This is how Google Maps is able to find your location and plot it on a map.
- The Canvas and WebGL APIs allow you to create animated 2D and 3D graphics. People are doing some amazing things using these web technologies — see Chrome Experiments and webglsamples.
- Audio and Video APIs like HTMLMediaElement and WebRTC allow you to do really interesting things with multimedia, such as play audio and video right in a web page, or grab video from your web camera and display it on someone else's computer (try our simple Snapshot demo to get the idea).

### Third party APIs 

They are not built into the browser by default, and you generally have to grab their code and information from somewhere on the Web. 

For example:

- Twitter API
- Google Maps API
- Facebook API

### What is JavaScript doing on your page?

When you load a web page in your browser, you are running your code (the HTML, CSS, and JavaScript) inside an execution environment (the browser tab).

Each browser tab has its own separate bucket for running code in (these buckets are called "execution environments" in technical terms) — this means that in most cases the code in each tab is run completely separately, and the code in one tab cannot directly affect the code in another tab — or on another website. 

### Javascript Running Order

1. The browser loads the page.
2. If the browser encountered a block, it run from the top to the bottom.
3. It's important the order for the javascript code and html.

### Server side versus client side

Client code is run in your computer. When the browser loads a page, it runs the code in your computer.

[Server side](https://developer.mozilla.org/en-US/docs/Learn/Server-side) is run his code on the server, then it's results. It's called server side because it's running on the server. Javascript, python, PHP, Ruby, Go, etc. are all server side languages.

### Dynamic vs Static

- Dynamic: The code is run every time the page is loaded.
- Static: The code is run only once.

### How do you add JavaScript to your page?

Internal JS

```html
<script>
  // Javascript code
  console.log('Hello World!');
</script>
```

External JS

```html
<script src="script.js"></script>
```

Inline JS (Deprecated instead using add [event listener](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#using_addeventlistener_instead))
```html
// This button is linked to button-user.js
<button onclick="createParagraph()">Click me!</button>
```

### async and defer

There are actually two modern features we can use to bypass the problem of the blocking script — `async` and `defer`.

Scripts loaded using the async attribute will download the script without blocking the page while the script is being fetched.

Scripts loaded with the defer attribute will load in the order they appear on the page. They won't run until the page content has all loaded, which is useful if your scripts depend on the DOM being in place.

<img src="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript/async-defer.jpg">

### Comments

As with HTML and CSS, it is possible to write comments into your JavaScript code that will be ignored by the browser.

A single line comment is written after a double forward slash (//), e.g.
```javascript
// My comment here
```
A multi-line comment is written between the strings /* and */, e.g.
```javascript
/*
My multiline comment here
*/
```