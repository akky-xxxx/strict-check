# forbidden-multiple-named-exports
- Forbidden the multiple named exports at one file

## Rule options

```js
...
"sc-js/forbidden-multiple-named-exports": [<enabled>]
...
```

Example of **invalid** :x: code:

```tsx
// "sc-js/forbidden-multiple-named-exports": ["error"]
export const One = 1;
export const Two = 2;
```

Example of **valid** :o: code:

```tsx
// "sc-js/forbidden-multiple-named-exports": ["error"]
export const One = 1;
[EOF]
```
