# restrict-use-of-process-env
- For the centralized manage the env

## Rule options

```js
...
"sc-js/restrict-use-of-process-env": <enabled>
...
```

Example of **invalid** :x: code

```tsx
// "sc-js/restrict-use-of-process-env": "error"
const env = process.env
const { env: variableName } = process
```

Example of **valid** :o: code

```tsx
// "sc-js/restrict-use-of-process-env": "error"

// const file
/* eslint-disable sc-js/restrict-use-of-process-env */
export const Environment = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3000,
}

// side to use
import { Environment } from "../const"

const env = Environment
```
