# Hypertext markup language

HTML (Hypertext Markup Language) is a markup language that tells web browsers how to structure the web pages you visit. It can be as complicated or as simple as the web developer wants it to be. HTML consists of a series of elements, which you use to enclose, wrap, or mark up different parts of content to make it appear or act in a certain way. The enclosing tags can make content into a hyperlink to connect to another page, italicize words, and so on. 

![Image](https://sebastian.expert/wp-content/uploads/2015/01/hierarchy_tags_Siblings.png)

**Useful links**

- [Developer Mozilla Docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
  
## Guide
- [Hypertext markup language](#hypertext-markup-language)
  - [Guide](#guide)
  - [Meta](#meta)
  - [Labels](#labels)
  - [Section vs Div vs Article vs Aside](#section-vs-div-vs-article-vs-aside)

## Meta
They are typcally used to specific character set page descriptions, keywords author of document viewports

```html
<meta name="author">Matias Vallejos</meta>
```

## Labels 

[Basic Code](basic\index.html) / [Mozilla Labels](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)

Labels are the main head of label and i could set property. They can be used on css and the property class or id are the most important reference to set.

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

## Section vs Div vs Article vs Aside

[Sectioning Content](https://bitsofco.de/sectioning-content-in-html5/)

**Sections** are more specific elements than divs and has necesseary `<h1>`.

The `<section>` element is used to define a generic section of a document or `<section>` application. For example, you may choose to create sections round your content; one section for contact information, another section for news feeds, and so on. It's important to understand that it isn't intended for styling purposes. If you need to wrap an element merely to style it, you should continue to use a as you would `<div>` have before.

**Divs** are the main head of css and it is an element with a general purpose. It has not a specific meaning.

The `<div>` HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. styling is directly applied to it, or some kind of layout model like Flexbox is applied to its parent element).

**Articles** are self contained and it could be use in another part of the page without lost any meaning. It also need h1.

The `<article>` element, alongside can easily lead to confusion. I `<article> <section>` certainly had to read and re-read the specifications of each before it sank in. The element is used to wrap a self-contained piece of content. When `<article>` structuring a page, ask whether the content you're intending to use within a tag could be taken as a whole lump and pasted onto a different site and `<article>` still make complete sense? Another way to think about it is would the content being wrapped in actually constitute a separate article in a RSS feed `<article>`

**Aside** element is used for content that is tangentially related to the content `<aside>` around it.

In practical terms, I often use it for sidebars (when it contains suitable content). It's also considered suitable for pull quotes, advertising, and groups of navigation elements (such as Blog rolls, and so on).

<img src="https://bitsofco.de/img/blog/31/divsectionarticle.jpg">