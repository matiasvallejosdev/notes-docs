# Cascade Style Sheet

CSS can be used for very basic document text styling — for example changing the color and size of headings and links. It can be used to create layout — for example turning a single column of text into a layout with a main content area and a sidebar for related information. It can even be used for effects such as animation. Have a look at the links in this paragraph for specific examples.

## Useful links

- [CSS Docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Getting_started)

## Directory guide
- [Cascade Style Sheet](#cascade-style-sheet)
  - [Useful links](#useful-links)
  - [Directory guide](#directory-guide)
  - [Selectors](#selectors)
  - [Basic](#basic)
    - [Pseudoclasses](#pseudoclasses)
  - [Custom Properties](#custom-properties)
  - [Box Model](#box-model)
  - [Layout](#layout)
  - [Flexbox](#flexbox)
  - [Grid](#grid)
  - [Grid vs Flexbox](#grid-vs-flexbox)

## Selectors

[Selectors Code](selectors/index.html) / [Mozilla Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

This are the way that you can define styles to an html element. You can use classes, labels or property.
You also can combine this types.

```css
.body{
    text-align: left;
    color: #red;
}
```

**Universal selector**
Selects all elements. Optionally, it may be restricted to a specific namespace or to all namespaces.
*Syntax: '*'

**Type selector**
Selects all elements that have the given node name.
*Syntax: elementname*

**Class selector**
Selects all elements that have the given class attribute.
*Syntax: .classname*

**Id selector**
Selects an element based on the value of its id attribute. There should be only one element with a given ID in a document.
*Syntax: #idname*

## Basic 

[Basic Code](basic/index.html) / [Mozilla Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

In CSS, selectors are used to target the HTML elements on our web pages that we want to style. There are a wide variety of CSS selectors available, allowing for fine-grained precision when selecting elements to style. In this article and its sub-articles we'll run through the different types in great detail, seeing how they work.

**For example:**
- color
- border
- border-styles
- border-colors
- backgroud-color
- opacity
- background-image
- height
- width
- background-sizes
- margin
- paddingg
- overflow
- list-style
- text-align
- text-colors
- text-decoration
- text-shadow
- font-family
- display

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

![Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png)


## Layout 

[Layout Code](layout/index.html) / [Layout Mozilla](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction)

CSS page layout techniques allow us to take elements contained in a web page and control where they're positioned relative to the following factors: their default position in normal layout flow, the other elements around them, their parent container, and the main viewport/window. The page layout techniques we'll be covering in more detail in this module are:

- Normal flow
- The display property
- Flexbox
- Grid
- Floats
- Positioning
- Table layout
- Multiple-column layout

Each technique has its uses, advantages, and disadvantages. No technique is designed to be used in isolation. By understanding what each layout method is designed for you'll be in a good position to understand which method is most appropriate for each task.

## Flexbox 

[Flexbox Code](flexbox/index.html) / [Flexbox Mozilla](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex (expand) to fill additional space or shrink to fit into smaller spaces. This article explains all the fundamentals.

## Grid 

[Grid Code](grid/index.html) / [Grid Mozilla](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)

CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns. It has many features that make building complex layouts straightforward. This article will explain all you need to know to get started with page layout.

## Grid vs Flexbox 

[Grid vs Flexbox Code](grid-vs-flexbox/index.html) / [Article Geeks Grid vs Flexbox](https://www.geeksforgeeks.org/comparison-between-css-grid-css-flexbox/) / [Article Medium Grid vs Flexbox](https://medium.com/turo-engineering/flexbox-vs-css-grid-6a94547b6c06)

*Uniqueness In Grid And Flexbox:*

**One Vs Two Dimension:**

- Grid is made for two-dimensional layout while Flexbox is for one. This means Flexbox can work on either row or columns at a time, but Grids can work on both.
- Flexbox, gives you more flexibility while working on either element (row or column). HTML markup and CSS will be easy to manage in this type of scenario.
- GRID gives you more flexibility to move around the blocks irrespective of your HTML markup.

**Content-First vs Layout-First:**

- Major Uniqueness between Flexbox and Grids is that the former works on content while the latter is based on the layout.
- The Flexbox layout is best suited to application components and small-scale layouts, while the Grid layout is designed for larger-scale layouts that are not linear in design.

*Difference Between Grid and Flexbox:*

**Dimensionality and Flexibility:**

- Flexbox offers greater control over alignment and space distribution between items. Being one-dimensional, Flexbox only deals with either columns or rows.
- Grid has two-dimension layout capabilities which allow flexible widths as a unit of length. This compensates for the limitations in Flex.

**Alignment:**

- Flex Direction allows developers to align elements vertically or horizontally, which is used when developers create and reverse rows or columns.
- CSS Grid deploys fractional measure units for grid fluidity and auto-keyword functionality to automatically adjust columns or rows.
  
**Item Management**

- Flex Container is the parent element while Flex Item represents the children. The Flex Container can ensure balanced representation by adjusting item dimensions. This allows developers to design for fluctuating screen sizes.
- Grid supports both implicit and explicit content placement. Its inbuilt automation allows it to automatically extend line items and copy values into the new creation from the preceding item.