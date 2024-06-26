# file-path-patterns
- Check if file path follows regular expression

## Rule options

```js
...
"sc-js/file-path-patterns": [<enabled>, {
  "allowPatterns": <RegExp>[]
}]
...
```

### `allowPatterns`
- Specify the regular expression array for allows path

#### value: `[/index(?:\.(?:stories|test))?\.tsx?/]`

Example of **invalid** :x: code when option value `[/index(?:\.(?:stories|test))?\.tsx?/]`:


```tsx
// "sc-js/file-path-patterns": ["error", { "allowPatterns": [/index(?:\.(?:stories|test))?\.tsx?/] }]
// Button.tsx
import { useState } from "react"
```

Example of **valid** :o: code when option value `[/index(?:\.(?:stories|test))?\.tsx?/]`:

```tsx
// "sc-js/file-path-patterns": ["error", { "allowPatterns": [/index(?:\.(?:stories|test))?\.tsx?/] }]
// Button/index.tsx
import { useState } from "react"
```

```tsx
// "sc-js/file-path-patterns": ["error", { "allowPatterns": [/index(?:\.(?:stories|test))?\.tsx?/] }]
// Button/index.stories.tsx
import { Button } from "./"
```

```tsx
// "sc-js/file-path-patterns": ["error", { "allowPatterns": [/index(?:\.(?:stories|test))?\.tsx?/] }]
// Button/index.test.tsx
import { Button } from "./"
```
