## Hypertext markup language

HTML (Hypertext Markup Language) is a markup language that tells web browsers how to structure the web pages you visit. It can be as complicated or as simple as the web developer wants it to be. HTML consists of a series of elements, which you use to enclose, wrap, or mark up different parts of content to make it appear or act in a certain way. The enclosing tags can make content into a hyperlink to connect to another page, italicize words, and so on. 

![Image](https://sebastian.expert/wp-content/uploads/2015/01/hierarchy_tags_Siblings.png)

***Useful links***

https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started

***Table of contents:***
- [Hypertext markup language](#hypertext-markup-language)
  - [Meta](#meta)
  - [Labels](#labels)
  - [Section vs Div vs Article](#section-vs-div-vs-article)

### Meta
They are typcally used to specific character set page descriptions, keywords author of document viewports

```html
<meta name="author">Matias Vallejos</meta>
```

### Labels 

[<>](basic\index.html)

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label

Labels are the main head of label and i could set property. They can be used on css and the property class or id are the most important reference to set.
- Property:
  - Id
  - Class
  - Style

```html
<label property="property">Content Here</label>
```
Every style must be applied in css file and it's important to keep clean code and follow good programming practices.

```html
<!-- 
    - Structure
    - Element
    - Subelements
    - Utils
-->

<header></header>
<footer></footer>
<main></main>
<div></div>
<article></article>
<section></section>

<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<p></p>
<a></a>
<label></label>
<textarea></textarea>

<ul></ul>
<ol></ol>
<li></li>

<button></button>
<image href="link"></image>
<form action="route" method="GET"></form>
<input id="search" type="text/email/password/button/radio/checkbox/file/sumbit"></input>
<video></video>

<table></table>
<tr></tr>
<th></th>
<td></td>
<thead></thead>
<tfoot></tfoot>
<tbody></tbody>

<!-- Cooment here -->

<hr>
<br>
```

### Section vs Div vs Article

https://bitsofco.de/sectioning-content-in-html5/

**Sections** are more specific elements than divs and has necesseary `<h1>`.
**Divs** are the main head of css and it is an element with a general purpose. It has not a specific meaning.
**Articles** are self contained and it could be use in another part of the page without lost any meaning. It also need h1.