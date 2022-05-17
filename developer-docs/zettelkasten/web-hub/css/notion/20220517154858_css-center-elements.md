# Center elements

Tags: #centering #center

**Inspired by**
- [Layout](20220517151424_css-layout.md)
- [Flexbox](20220517150152_css-box-model.md)

**Links**
- [How to center anything with CSS](https://www.freecodecamp.org/news/how-to-center-anything-with-css-align-a-div-text-and-more/)

## Content

CSS Center is one of the most common thing to do, you could center whatever you want but in general you have optimal ways to do in order to make your web responsive, easy to understand and scale.

### Margin Auto

Use the shorthand margin property with the value 0 auto to center block-level elements like a div horizontally:

```css
.box{
  width: 100px;
  height: 100px;
  margin: 0 auto;
  /* 
  You need to define the size of the element to center the element. You only center horizontally.
  */
}

```
### Textalign Center

To center text or links horizontally, just use the text-align property with the value center:

```css
.box{
  height: 100px;
  line-height: 100px; /* Center vertically */
  text-align: center; /* Center content */
}
```

### Flexbox center

Flexbox is the most modern way to center things on the page, and makes designing responsive layouts much easier than it used to be. However, it's not fully supported in some legacy browsers like Internet Explorer.

To center an element horizontally with Flexbox, just apply display: flex and justify-content: center to the parent element:

```css
  .box{
    dsiplay:flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    flex-direction: row;
  }
```

### Grid centered

Gird is the most flexible way to center things on the page. It's not fully supported in some legacy browsers like Internet Explorer.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJFdmlcGc3MmGNGy8rxKItnefERVp4LTIGLZcRxfEHdmxpOjCTuKZyljSDkCLtAxYKgY&usqp=CAU" style="height:100px">

```css
  .grid{
    display:grid;
  }
  .grid-item{
    align-self: center; /* Cross axis */
    justify-self: center; /* Main axis */ 
  }
```
