**React JS**

***Useful links:***
- https://nextjs.org/docs/

***Table of contents***
- [React](#react)
- [Errors](#errors)

### React


### Errors

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