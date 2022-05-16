# React JS

React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

## Useful links
- [Next JS Docs](https://nextjs.org/docs/)

## Guide
- [React JS](#react-js)
  - [Useful links](#useful-links)
  - [Guide](#guide)
  - [Errors](#errors)

## Errors

**Unable to resolve dependency tree error when installing npm packages**

https://stackoverflow.com/questions/64573177/unable-to-resolve-dependency-tree-error-when-installing-npm-packages

*Finally, I found the answer. Try this command:*
```
    npm install --save --legacy-peer-deps
```

<br>

**Error: PostCSS plugin tailwindcss requires PostCSS**

https://stackoverflow.com/questions/64925926/error-postcss-plugin-tailwindcss-requires-postcss-8

*Worked for me :*

```
    npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```