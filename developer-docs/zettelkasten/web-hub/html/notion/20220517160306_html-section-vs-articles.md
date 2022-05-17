# Section vs Div vs Article vs Aside

Tags: #articles #section #aside #elements

**Inspired by**
- [..]()

**Links**
- [Sectioning Content](https://bitsofco.de/sectioning-content-in-html5/)

## Content

**Sections** are more specific elements than divs and has necesseary `<h1>`.

The `<section>` element is used to define a generic section of a document or `<section>` application. For example, you may choose to create sections round your content; one section for contact information, another section for news feeds, and so on. It's important to understand that it isn't intended for styling purposes. If you need to wrap an element merely to style it, you should continue to use a as you would `<div>` have before.

**Divs** are the main head of css and it is an element with a general purpose. It has not a specific meaning.

The `<div>` HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. styling is directly applied to it, or some kind of layout model like Flexbox is applied to its parent element).

**Articles** are self contained and it could be use in another part of the page without lost any meaning. It also need h1.

The `<article>` element, alongside can easily lead to confusion. I `<article> <section>` certainly had to read and re-read the specifications of each before it sank in. The element is used to wrap a self-contained piece of content. When `<article>` structuring a page, ask whether the content you're intending to use within a tag could be taken as a whole lump and pasted onto a different site and `<article>` still make complete sense? Another way to think about it is would the content being wrapped in actually constitute a separate article in a RSS feed `<article>`

**Aside** element is used for content that is tangentially related to the content `<aside>` around it.

<img src="https://bitsofco.de/img/blog/31/divsectionarticle.jpg">

In practical terms, I often use it for sidebars (when it contains suitable content). It's also considered suitable for pull quotes, advertising, and groups of navigation elements (such as Blog rolls, and so on).