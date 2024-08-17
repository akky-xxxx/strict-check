# file-path-patterns
- Check if file path follows regular expression

## Rule options

```js
...
"sc-js/file-path-patterns": [<enabled>, {
  "allowPatterns": <RegExp>[], // Deprecated
  "allowPatterns": <RegExp like string>[], // Next standard. string that be able to hands over to RegExp
}]
...
```

### `allowPatterns`
- Specify the regular expression array for allows path
- Deprecated: array of regular expression
- Next standard: array of string that be able to hands overt to RegExp

#### value: `[/index(?:\.(?:stories|test))?\.tsx?/]`

Example of **invalid** :x: code when option values
- `[/index(?:\.(?:stories|test))?\.tsx?/]`:
- `["index(?:.(?:stories|test))?.tsx?/"]`:


```tsx
// "sc-js/file-path-patterns": ["error", { "allowPatterns": [/index(?:\.(?:stories|test))?\.tsx?/] }]
// "sc-js/file-path-patterns": ["error", { "allowPatterns": ["index(?:.(?:stories|test))?.tsx?"] }]
// Button.tsx
import { useState } from "react"
```

Example of **valid** :o: code when option values
- `[/index(?:\.(?:stories|test))?\.tsx?/]`:
- `["index(?:.(?:stories|test))?.tsx?"]`:

```tsx
// "sc-js/file-path-patterns": ["error", { "allowPatterns": [/index(?:\.(?:stories|test))?\.tsx?/] }]
// "sc-js/file-path-patterns": ["error", { "allowPatterns": ["index(?:.(?:stories|test))?.tsx?"] }]
// Button/index.tsx
import { useState } from "react"
```

```tsx
// "sc-js/file-path-patterns": ["error", { "allowPatterns": [/index(?:\.(?:stories|test))?\.tsx?/] }]
// "sc-js/file-path-patterns": ["error", { "allowPatterns": ["index(?:.(?:stories|test))?.tsx?"] }]
// Button/index.stories.tsx
import { Button } from "./"
```

```tsx
// "sc-js/file-path-patterns": ["error", { "allowPatterns": [/index(?:\.(?:stories|test))?\.tsx?/] }]
// "sc-js/file-path-patterns": ["error", { "allowPatterns": ["index(?:.(?:stories|test))?.tsx?"] }]
// Button/index.test.tsx
import { Button } from "./"
```
