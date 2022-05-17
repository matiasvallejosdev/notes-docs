# Grid vs Flexbox 

Tags: #tag1 #tag2 #tag3

**Inspired by**
- [Grid](20220517152844_css-grid.md)
- [Flexbox](20220517152705_css-flexbox.md)

**Links**
- [Grid vs Flexbox Code](grid-vs-flexbox/index.html) 
- [Article Geeks Grid vs Flexbox](https://www.geeksforgeeks.org/comparison-between-css-grid-css-flexbox/) 
- [Article Medium Grid vs Flexbox](https://medium.com/turo-engineering/flexbox-vs-css-grid-6a94547b6c06)

## Content

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
