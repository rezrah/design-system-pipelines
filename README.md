## Design System Pipelines demo

### What is it?

A working demonstration for end-to-end [build piplelines](<https://en.wikipedia.org/wiki/Pipeline_(software)>) in Design Systems using monorepo's.

![data-flow](https://user-images.githubusercontent.com/13340707/149162687-81018cca-98dd-4fa2-9f87-f9884ffb7122.png)

### What does it do?

- Builds design tokens programmatically in multiple formats
- Builds CSS stylesheets programmatically using design token output
- Builds React components that dynamically adapt to changes in design tokens and css stylesheets (above)
- Support for Figma API, to enable fully end-to-end, real-time build pipelines
- Supports using static, offline design token `.json` files as an alternative to Figma as a source of truth.

### Try it out

```
$ yarn        // install monorepo dependencies
$ yarn build  // build tokens, css and react
$ yarn start  // open docs
```

### Tech stack

- Yarn workspaces, Turborepo, Lerna
- Design tokens: Figma API / JSON, StyleDictionary
- CSS: SASS, PostCSS
- React: Webpack, CSS-Modules, TypeScript
- Docs: Next.js
- Backend: TypeScript
