# Responsive Design

Tags: #responsive #mobile #desktop

**Inspired by**
- [Grid](20220517152844_css-grid.md)
- [Flexbox](20220517152705_css-flexbox.md)

**Links**
- [Mozilla Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_design)

## Content

The term responsive design was coined by Ethan Marcotte in 2010 and described the use of three techniques in combination.

### Fluid layouts

Allow the page in the current viewport. You could use unit like `vh or vm` should adapt to the viewport. Use `max-width` or `%`.

### Responsive units

Use `rem` unity instead of px for most length. It's easier to scale automatically.

### Media Queries

[MediaQueries Code](media-queries/index.html) / [MediaQueries Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_queries)

Media queries let you adapt your site or app depending on the presence or value of various device characteristics and parameters.

They are a key component of responsive design. For example, a media query can shrink the font size on small devices, increase the padding between paragraphs when a page is viewed in portrait mode, or bump up the size of buttons on touchscreens.

For example, the following media query tests to see if the current web page is being displayed as screen media (therefore not a printed document) and the viewport is at least 800 pixels wide. The CSS for the .container selector will only be applied if these two things are true.

```css
@media screen and (min-width: 800px) {
  .container {
    margin: 1em 2em;
  }
}
```

You can add multiple media queries within a stylesheet, tweaking your whole layout or parts of it to best suit the various screen sizes. The points at which a media query is introduced, and the layout changed, are known as breakpoints.
### Flexible grids

Responsive sites don't just change their layout between breakpoints, they are built on flexible grids. A flexible grid means that you don't need to target every possible device size that there is, and build a pixel perfect layout for it.

By using a flexible grid, you only need to add in a breakpoint and change the design at the point where the content starts to look bad. For example, if the line lengths become unreadably long as the screen size increases, or a box becomes squashed with two words on each line as it narrows.
### Using min- and max- to match value ranges

Many of the media features outlined in the previous section — including `width`, `height`, color and color-index — can be prefixed with `min`- or `max`- to express minimum or maximum constraints.

### Modern layout technologies

Modern layout methods such as Multiple-column layout, Flexbox, and Grid are responsive by default. They all assume that you are trying to create a flexible grid and give you easier ways to do so.

#### Flexbox

[Flexbox](#flexbox)

In Flexbox, flex items will shrink and distribute space between the items according to the space in their container, as their initial behavior. By changing the values for `flex-grow` and `flex-shrink` you can indicate how you want the items to behave when they encounter more or less space around them.

#### Grid

[Grid](#Grid)

In CSS Grid Layout the `fr` unit allows the distribution of available space across grid tracks. The next example creates a grid container with three tracks sized at `1fr`. This will create three column tracks, each taking one part of the available space in the container. You can find out more about this approach to create a grid in the Learn Layout Grids topic, under Flexible grids with the `fr` unit.

```css
/* Technic using min/max functions */
.gallery-container{
  display: grid;
  grid-gap: 1rem;
  grid-auto-rows: 25rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  grid-auto-flow: dense; 
}
.card{
  background-color: #fff;
}
```

```css
/* Technic using grid areas */
.layout-container{
  max-width: 980px;
  margin: 20px auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: repeat(4,auto);
  grid-template-area: "header header header"
                      "content content sidebar"
                      "widget widget sidebar"
                      "footer footer footer";
}
.header-container{
  grid-area: header;
}
@media screen and (max-width: 768px){
  /* Change grid area property when the screen is smaller than 768px */
  .layout-container{
      grid-template-area: "header header header"
                          "content content content"
                          "sidebar sidebar sidebar"
                          "widget widget widget"
                          "footer footer footer";
  }
}
```

### Responsive Images

The simple way to make images responsive. You would scale it down.

```css
img{
  max-width: 100%;
}
```
