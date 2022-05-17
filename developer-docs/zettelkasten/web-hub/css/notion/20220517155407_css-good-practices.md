# Good practices

Tags: #tag1 #tag2 #tag3

**Inspired by**
- [..]()

**Links**
- [..]()

## Content

When you develop css it's important to manage principles like solid. That rules has the same value maintenance and scalability. 

### Arquitecture

A [CSS architecture](https://cheesecakelabs.com/blog/css-architecture-first-steps/) brings reasoning to CSS authoring. Imagine it as a set of guidelines and best practices to help developers write code that’s maintainable, flexible to scale and more reusable. We achieve that by applying a modular approach, promoting organization and conveying meaning to our codebase.

1. Separate and categorize your code
2. Define your Components
3. Apply a naming convention with a methodologies

I would say it's the presentation of content in the most accessible manner for any viewport that accesses it. In responsive web design consolidated three existing techniques (flexible grid layout, flexible images, and media and media queries)

### Viewport vs screen size

Viewport relates to the content area within the browser window, excluding the toolbars, tabs, and so on. More succinctly, it relates to the area where a website actually displays. Screen size refers to the physical display area of a device.

### Methodology

It's a method to achive an objective. The objective in CSS is to order naming of the selectors and divide them by concepts.

### SUIT Css

It's a methodologie to use with functions and tools. The class names are based in property like color, center. Utility and components.

### BEM Css

[Bem Code](bem-convetion/index.html) / [Bem Methodologies](http://getbem.com/introduction/) / [Youtube Tutorial](https://youtu.be/bvnzyXGkNY4?list=PLOG7JkQSkBqY0X010vEANFeKiQCXnHj9y) / [Bem Cheat Sheet](https://9elements.com/bem-cheat-sheet/) / [Bem freecodecamp.org](https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/)

BEM stands for “Block, Element, Modifier” and is a simple but effective way to group together different components/widgets (as shown by the following visual aid).

Mark McDonnell, [Maintainable CSS with BEM](https://www.integralist.co.uk/posts/bem/#4)

Within each defined ‘Block’ you can have multiple ‘elements’ that make up the object, and for each element (depending on where it appears within the block) you might need to ‘modify’ the state of the element.

The principles are similar to other methods of structuring CSS (OOCSS/SMACSS) but they are greatly simplified in comparison without giving up any of the architectural benefits.

There are plenty of methodologies out there aiming to reduce the CSS footprint, organize cooperation among programmers and maintain large CSS codebases. This is obvious in large projects like Twitter, Facebook and Github, but other projects often grow into some “Huge CSS file” state pretty quickly.

_http://getbem.com/naming/_
Block | Element | Modifier
---------|----------|---------
Standalone entity that is meaningful on its own. | A part of a block that has no standalone meaning and is semantically tied to its block. | A flag on a block or element. Use them to change appearance or behavior.
 `header`, `container`, `menu`, `article` | `menu item`, `list item`, `header`, `tittle` | `disable`, `active`, `highlighted`, `fixed`, `size`, `color yellow`

### Normalize CSS

[Normalize.css](https://necolas.github.io/normalize.css/) makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing. It solve and fix bugs between browsers.

`npm install normalize.css`
