# match-names-of-file-and-export
- Match name of filename and export target
- Filename is specified by capture of regular expression

## Rule options

```js
...
"sc-js/match-names-of-file-and-export": [<enabled>, {
  "captures": <RegExp>[], // Deprecated
  "captures": <RegExp>[], // Next standard. string that be able to hands over to RegExp
}]
...
```

### `captures`
- Specify the regular expression array for allows path
- Deprecated: array of regular expression
- Next standard: array of string that be able to hands overt to RegExp

#### value: `[/\/components\/(?:atoms|molecules|organsims|templates)\/([^/]+)\/index\.tsx/]`

Example of **invalid** :x: code when option values
- `[/\/components\/(?:atoms|molecules|organsims|templates)\/([^/]+)\/index\.tsx/]`:
- `["components(?:atoms|molecules|organsims|templates)([^/]+)index.tsx"]`:

```tsx
// "sc-js/match-names-of-file-and-export": ["error", { "captures": [/\/components\/(?:atoms|molecules|organsims|templates)\/([^/]+)\/index\.tsx/] }]
// "sc-js/match-names-of-file-and-export": ["error", { "captures": ["/components/(?:atoms|molecules|organsims|templates)/([^/]+)/index.tsx"] }]
// /components/atoms/Button/index.tsx
export const button = () => {}
```

Example of **valid** :o: code when option values
- `[/\/components\/(?:atoms|molecules|organsims|templates)\/([^/]+)\/index\.tsx/]`:
- `["/components/(?:atoms|molecules|organsims|templates)/([^/]+)/index.tsx"]`:

```tsx
// "sc-js/match-names-of-file-and-export": ["error", { "captures": [/\/components\/(?:atoms|molecules|organsims|templates)\/([^/]+)\/index.tsx/]] }]
// "sc-js/match-names-of-file-and-export": ["error", { "captures": ["/components/(?:atoms|molecules|organsims|templates)/([^/]+)/index.tsx"]] }]
// /components/atoms/Button/index.tsx
export const Button = () => {}
```
