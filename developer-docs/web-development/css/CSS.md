# Cascade Style Sheet

CSS can be used for very basic document text styling — for example changing the color and size of headings and links. It can be used to create layout — for example turning a single column of text into a layout with a main content area and a sidebar for related information. It can even be used for effects such as animation. Have a look at the links in this paragraph for specific examples.

**Useful links:**

- [CSS MozillaDocs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS DevDocs](https://devdocs.io/css/)
## Guide
- [Cascade Style Sheet](#cascade-style-sheet)
  - [Guide](#guide)
  - [Selectors](#selectors)
  - [Basic](#basic)
    - [Pseudoclasses](#pseudoclasses)
  - [Custom Properties](#custom-properties)
  - [Box Model](#box-model)
  - [Layout](#layout)
    - [Building blocks](#building-blocks)
    - [Control the position](#control-the-position)
    - [The display property](#the-display-property)
  - [Values and units](#values-and-units)
    - [Absolute length units](#absolute-length-units)
    - [Relative length units](#relative-length-units)
    - [Percentages units](#percentages-units)
  - [Float](#float)
  - [Flexbox](#flexbox)
    - [Flexbox Model](#flexbox-model)
    - [Flex Direction](#flex-direction)
    - [Flex Wrapping](#flex-wrapping)
  - [Grid](#grid)
    - [Grid Tracks](#grid-tracks)
    - [Grid Lines](#grid-lines)
  - [Grid vs Flexbox](#grid-vs-flexbox)
    - [Uniqueness In Grid And Flexbox](#uniqueness-in-grid-and-flexbox)
    - [Difference Between Grid and Flexbox](#difference-between-grid-and-flexbox)
  - [Justify-items vs Align-items](#justify-items-vs-align-items)

## Selectors

CSS treats each HTML e XX lement as if it appears inside its own box and uses rules to indicate how that element should look.

[Selectors Code](selectors/index.html) / [Mozilla Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

This are the way that you can define styles to an html element. You can use classes, labels or property.
You also can combine this types.

```css
.body{
    text-align: left;
    color: #red;
}
```

Universal Selector: Applies to all elements in the
document.

```css
*{}
```

Type Selector: Matches element names.
```css
h1,h2,h3{}
```
Class Selector: Matches an element whose class attribute has a value that matches the one specified after the period (or full stop) symbol.
```css
.card{}
.card p{}
```
ID Selector: Matches an element whose id attribute has a value that matches the one specified after the pound or hash symbol.
```css
#introduction{}
```
Child Selector: Matches an element that is a direct child of another.
```css
li>a{}
```
Descendant Selector: Matches an element that is a descendent of another specified element (not just a direct child of that element).
```css
p a{}
```
Adjacent Sibling Selector: Matches an element that is the
next sibling of another
```css
h1+p{}
```
General Sibling Selector: Matches an element that is a sibling of another, although it does not have to be the directly preceding element.
```css
h1~p{}
```

## Basic 

[Basic Code](basic/index.html) / [Mozilla Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

In CSS, selectors are used to target the HTML elements on our web pages that we want to style. There are a wide variety of CSS selectors available, allowing for fine-grained precision when selecting elements to style. In this article and its sub-articles we'll run through the different types in great detail, seeing how they work.

**For example:**
```css
  color
  border
  border-styles
  border-colors
  backgroud-color
  opacity
  background-image
  height
  width
  background-sizes
  margin
  paddingg
  overflow
  list-style
  text-align
  text-colors
  text-decoration
  text-shadow
  font-family
  display
```

### Pseudoclasses

[Mozilla Pseuodoclasses](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s).
 
*For example, :hover can be used to change a button's color when the user's pointer hovers over it.*

```css
button:hover {
  color: blue;
}
```

## Custom Properties

[Custom Properties Code](custom-property/index.html)

Property names that are prefixed with --, like --example-name, represent custom properties that contain a value that can be used in other declarations using the var() function.

Custom properties are scoped to the element(s) they are declared on, and participate in the cascade: the value of such a custom property is that from the declaration decided by the cascading algorithm.


## Box Model

[Box Model Code](box-model/index.html)

Everything in CSS has a box around it, and understanding these boxes is key to being able to create layouts with CSS, or to align items with other items. In this lesson, we will take a proper look at the CSS Box Model so that you can build more complex layout tasks with an understanding of how it works and the terminology that relates to it.

<img src="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png" style="height:300px">


## Layout 

[Layout Code](layout/index.html) / [Layout Mozilla](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction)

CSS page layout techniques allow us to take elements contained in a web page and control where they're positioned relative to the following factors: their default position in normal layout flow, the other elements around them, their parent container, and the main viewport/window. The page layout techniques we'll be covering in more detail in this module are:

### Building blocks
CSS treats each HTML element as if it is in its own box. This box will either be a block-level box or an inline box.

<img src="http://4.bp.blogspot.com/-TiwOixlooJk/U4UyEnv_XpI/AAAAAAAACFs/NuuLz2IvoZ4/w1200-h630-p-k-no-nu/css-display-block-vs-inline-block.png" style="height:300px">

```html
<!-- Block level -->
<h1><p><ul><li>
<!-- Inline level -->
<img><b><i>
<!-- Inline block -->
<p><a>
```
### Control the position
If one block-level element sits inside another block-level element then the outer box is known as the containing or parent element.
- Normal flow: all blocks within the same block-level element are known as the "parent" of the other blocks.
```css
p{
  position: static;
  /* It's the default flow element*/
  position: relative;
  /* This moves an element from the position it would be in normal flow, shifting it to the top, right, bottom, or left of where it would have been placed. This does not affect the position of surrounding elements; they stay in the position they would be in in normal flow. */
}
```
- Out flow: all blocks within the same block-level element are known as the "child" of the other blocks.
```css
p{
  position: absoulte;
}
/* This positions the element in relation to its containing element. It is taken out of normal flow, meaning that it does not affect the position of any surrounding elements (as they simply ignore the space it would have taken up). Absolutely positioned elements move as users scroll up and down the page. */

```

### The display property
The main methods for achieving page layout in CSS all involve specifying values for the ```display``` property. This property allows us to change the default way something displays. Everything in normal flow has a default value for ```display```; i.e., a default way that elements are set to behave. For example, the fact that paragraphs in English display one below the other is because they are styled with ```display: block```. If you create a link around some text inside a paragraph, that link remains inline with the rest of the text, and doesn't break onto a new line. This is because the ```<a>``` element is display: inline by default.

In addition to being able to change the default presentation by turning an item from block to inline and vice versa, there are some more involved layout methods that start out as a value of ```display```. However, when using these you will generally need to invoke additional properties. The two values most important for our discussion of layout are ```display: flex``` and ```display: grid.```

- [Flexbox](#flexbox)
- [Grid](#grid)
- [Float](#float)
- Positioning
- Table layout
- Multiple-column layout

Each technique has its uses, advantages, and disadvantages. No technique is designed to be used in isolation. By understanding what each layout method is designed for you'll be in a good position to understand which method is most appropriate for each task.

## Values and units

[Sizing Code](sizing-values/index.html) / [CSS Sizing Medium](https://medium.com/@madhum86/css-font-sizing-pixels-vs-em-vs-rem-vs-percent-vs-viewport-units-b1485716afe7) / [CSS Values Mozilla](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

The numeric type you will come across most frequently is <length>. For example 10px (pixels) or 30em. There are two types of lengths used in CSS — relative and absolute. It's important to know the difference in order to understand how big things will become.

### Absolute length units

The following are all absolute length units — they are not relative to anything else, and are generally considered to always be the same size.

- pixels are the most common unit of measurement in web design. They are used to describe the size of elements, the distance between elements, and the size of the page itself.

### Relative length units

Relative length units are relative to something else, perhaps the size of the parent element's font, or the size of the viewport. The benefit of using relative units is that with some careful planning you can make it so the size of text or other elements scales relative to everything else on the page.

- **em and rem** are the two relative lengths you are likely to encounter most frequently when sizing anything from boxes to text.
- **em** is relative to the font-size of the element and affect inherence values. We use only to make a difference between the font-size of the element and the font-size of the parent element.
- **rem** is relative to the root font-size of the document and affect inherence values. We use always to make a difference between the root font-size of the document and the font-size of the parent element.

**To recap, the em unit means "my parent element's font-size"** in the case of typography. The ```<li>``` elements inside the ```<ul>``` with a class of ems take their sizing from their parent. So each successive level of nesting gets progressively larger, as each has its font size set to 1.3em — 1.3 times its parent's font size.

**To recap, the rem unit means "The root element's font-size"**. (rem stands for "root em".) The ```<li>``` elements inside the ```<ul>``` with a class of rems take their sizing from the root element (```<html>```). This means that each successive level of nesting does not keep getting larger.

### Percentages units

The thing with percentages is that they are always set relative to some other value. For example, if you set an element's font-size as a percentage, it will be a percentage of the font-size of the element's parent. If you use a percentage for a width value, it will be a percentage of the width of the parent.

## Float
[Float Layout](layout\index.html) / [Float Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/float) 

The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).
```css
div{
  /* Keyword values */
  float: left;
  float: right;
  float: none;
  float: inline-start;
  float: inline-end;

  /* Global values */
  float: inherit;
  float: initial;
  float: revert;
  float: revert-layer;
  float: unset;
}

```

## Flexbox 

[Flexbox Layout](layout/flexbox.html) / [Flexbox Code](flexbox/index.html) / [Flexbox Mozilla](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex (expand) to fill additional space or shrink to fit into smaller spaces. This article explains all the fundamentals. It's useful to elements inner boxes.

### Flexbox Model

When elements are laid out as flex items, they are laid out along two axes:

<img src="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox/flex_terms.png" style="height:300px">

- The main axis is the axis running in the direction the flex items are laid out in (for example, as rows across the page, or columns down the page.) The start and end of this axis are called the main start and main end.
- The cross axis is the axis running perpendicular to the direction the flex items are laid out in. The start and end of this axis are called the cross start and cross end.
- The parent element that has display: flex set on it (the ```<section>``` in our example) is called the flex container.
- The items laid out as flexible boxes inside the flex container are called flex items (the ```<article>``` elements in our example).

### Flex Direction

Flexbox provides a property called flex-direction that specifies which direction the main axis runs (which direction the flexbox children are laid out in). By default this is set to row, which causes them to be laid out in a row in the direction your browser's default language works in (left to right, in the case of an English browser).

```css
  flex-direction: row;
  flex-direction: column;
```

<img src="https://miro.medium.com/max/1400/1*bw4hK0MYxFXbw7ylW2fR5Q.png" style="height:300px">

### Flex Wrapping

One issue that arises when you have a fixed width or height in your layout is that eventually your flexbox children will overflow their container, breaking the layout. 

```css
  flex-wrap: wrap;
```

We now have multiple rows. Each row has as many flexbox children fitted into it as is sensible. Any overflow is moved down to the next line.

## Grid 

[Grid Layout](layout/grid.html) / [Grid Code](grid/index.html) / [Grid Mozilla](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)

CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns. It has many features that make building complex layouts straightforward. This article will explain all you need to know to get started with page layout. It's useful to boxes inner structures.

<img src="https://miro.medium.com/max/1042/1*8-5_iM-cx-TO_CGI5mWAxQ.png" style="height: 300px">

You can create a grid with fixed track sizes – using pixels for example. This sets the grid to the specified pixel which fits to the layout you desire. You can also create a grid using flexible sizes with percentages or with the new ```fr``` unit designed for this purpose.

**The common properties of grid layour are:**
- grid-template-rows
- grid-template-columns
- row-gap
- column-gap
- gap
- justify-items
- align-items
- justify-content
- align-content
- grid-template-area

**The common properties of grid items are:**
- grid-column
- grid-row
- justify-self
- align-self

### Grid Tracks

We define rows and columns on our grid with the ```grid-template-columns``` and ```grid-template-rows``` properties. These define grid tracks. A grid track is the space between any two lines on the grid. In the below image you can see a track highlighted – this is the first row track in our grid.

<img src="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout/1_grid_track.png" style="height:300px">

### Grid Lines

It should be noted that when we define a grid we define the grid tracks, not the lines. Grid then gives us numbered lines to use when positioning items. In our three column, two row grid we have four column lines.

<img src="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout/1_diagram_numbered_grid_lines.png" style="height:300px">

So we can position our items on the grid using the ```grid-column``` and ```grid-row``` properties.


## Grid vs Flexbox 

[Grid vs Flexbox Code](grid-vs-flexbox/index.html) / [Article Geeks Grid vs Flexbox](https://www.geeksforgeeks.org/comparison-between-css-grid-css-flexbox/) / [Article Medium Grid vs Flexbox](https://medium.com/turo-engineering/flexbox-vs-css-grid-6a94547b6c06)

The arrival of Flexbox and CSS Grid signal a new era of layout on the Web. We must adopt a new mindset when it comes to layout in order to remain free of the habits, drawbacks, and hacks of the past. Let’s embrace these new tools and renew our exploration for what’s possible with layout on the Web. If you need 1D Layout use flexbox. Instead, if you need a 2d layout the use css grid.
### Uniqueness In Grid And Flexbox

**One Vs Two Dimension:**

- Grid is made for two-dimensional layout while Flexbox is for one. This means Flexbox can work on either row or columns at a time, but Grids can work on both.
- Flexbox, gives you more flexibility while working on either element (row or column). HTML markup and CSS will be easy to manage in this type of scenario.
- GRID gives you more flexibility to move around the blocks irrespective of your HTML markup.

**Content-First vs Layout-First:**

- Major Uniqueness between Flexbox and Grids is that the former works on content while the latter is based on the layout.
- The Flexbox layout is best suited to application components and small-scale layouts, while the Grid layout is designed for larger-scale layouts that are not linear in design.

### Difference Between Grid and Flexbox

**Dimensionality and Flexibility:**

- Flexbox offers greater control over alignment and space distribution between items. Being one-dimensional, Flexbox only deals with either columns or rows.
- Grid has two-dimension layout capabilities which allow flexible widths as a unit of length. This compensates for the limitations in Flex.

**Alignment:**

- Flex Direction allows developers to align elements vertically or horizontally, which is used when developers create and reverse rows or columns.
- CSS Grid deploys fractional measure units for grid fluidity and auto-keyword functionality to automatically adjust columns or rows.
  
**Item Management**

- Flex Container is the parent element while Flex Item represents the children. The Flex Container can ensure balanced representation by adjusting item dimensions. This allows developers to design for fluctuating screen sizes.
- Grid supports both implicit and explicit content placement. Its inbuilt automation allows it to automatically extend line items and copy values into the new creation from the preceding item.

## Justify-items vs Align-items

[Geek for Geek](https://www.geeksforgeeks.org/difference-between-align-content-and-align-items/) / [Medium Article](https://betterprogramming.pub/flexbox-align-items-and-align-content-a60b6f8451e3) / [Stackoverflow](https://es.stackoverflow.com/questions/231406/flexbox-diferencia-align-items-y-align-content)

Align-content is useful only if your flexbox is set to wrap (one more line). But, Align-items position items within a flex line.

<img src="https://i.stack.imgur.com/ZPDMz.png"  style="height:300px">
<img src="https://i.stack.imgur.com/IE0Zw.png"  style="height:300px">

**Justify-content: along primary axis** _(set horizontal alignment/spacing if flex-direction is row or vertical alignment/spacing if flex-direction is column)_

For instance, if flex-direction is row (default):

- flex-start; Align children horizontally left
- flex-end; Align children horizontally right
- center; Align children horizontally centered (amaze!)
- space-between; Distribute children horizontally evenly across entire width
- space-around; Distribute children horizontally evenly across entire width (but with space on the edges

**Align-items: along secondary axis**_(set vertical alignment if flex-direction is row or horizontal alignment if flex-direction is column)_

For instance, if flex-direction is row (default):

- flex-start; Align children vertically top
- flex-end; Align children vertically bottom
- center; Align children vertically centered (amaze!)
- baseline; Aligned children vertically so their baselines align (doesn't really work)
- stretch; Force children to be height of container (great for columns)