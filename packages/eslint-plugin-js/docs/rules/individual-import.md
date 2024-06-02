# individual-import
- Import them individual

## Rule options

```js
...
"@strict/js/individual-import": [<enabled>, {
  "targets": <string>[]
}]
...
```

### `targets`
- Specify check target modules

#### value: `["react"]`

Example of **invalid** :x: code when option value `["react"]`:

```tsx
// "@strict/js/individual-import": ["warn", { "targets": ["react"] }]
const [state, setState] = React.useState(1)
const changeHandler: React.ChangeEventHandler = () => {}
const Component = () => <React.Fragment>Component</React.Fragment>
```

Example of **valid** :o: code when option value `["react"]`:

```tsx
// "@strict/js/individual-import": ["warn", { "targets": ["react"] }]
const [state, setState] = useState(1)
const changeHandler: ChangeEventHandler = () => {}
const Component = () => <Fragment>Component</Fragment>
```
