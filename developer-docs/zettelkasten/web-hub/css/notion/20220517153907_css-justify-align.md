# Justify-items vs Align-items

Tags: #flexbox #grid

**Inspired by**
- [Flexbox](20220517152705_css-flexbox.md)
- 
**Links**
- [Geek for Geek](https://www.geeksforgeeks.org/difference-between-align-content-and-align-items/) 
- [Medium Article](https://betterprogramming.pub/flexbox-align-items-and-align-content-a60b6f8451e3) 
- [Stackoverflow](https://es.stackoverflow.com/questions/231406/flexbox-diferencia-align-items-y-align-content)

## Content

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
