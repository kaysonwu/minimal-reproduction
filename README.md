## Usage

```shell
yarn install

yarn build

// or 
yarn build:babel
```

## BUG

Appears after compiling with ts-loader:

```shell
ERROR in ./src/index.tsx
Module not found: Error: Can't resolve '@/pages/' in '...\minimal-reproduction\loadable-babel-plugin\src'
 @ ./src/index.tsx 51:13-44 24:11-28:15
```
