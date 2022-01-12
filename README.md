## Design System Pipelines demo

### What is it?

A working demonstration for end-to-end [build piplelines](<https://en.wikipedia.org/wiki/Pipeline_(software)>) in Design Systems using Primer Primitives, Primer CSS and Primer React as the basis.

![data-flow](https://user-images.githubusercontent.com/13340707/149162687-81018cca-98dd-4fa2-9f87-f9884ffb7122.png)

To demonstrate this working pipeline, a local webserver will render **both** react components and native HTML buttons to use the exact same design language as defined in the upstream CSS and design tokens.

### Watch the demo here

[https://www.loom.com/share/c16b2e77317b49a083713bde49d4c517](https://www.loom.com/share/c16b2e77317b49a083713bde49d4c517)

### What does it do?

- Builds design tokens programmatically in multiple formats (associative maps, arrays, etc) supporting various compiler languages (`sass`, `json`, `js` etc)
- Builds CSS stylesheets programmatically using design token output
- Builds React components that dynamically adapt to changes in design tokens and css stylesheets (above)
- Support for Figma API, to enable fully end-to-end, real-time build pipelines
- Supports using static, offline design token `.json` files as an alternative to Figma as a source of truth.

### Try it out

#### Design tokens (JSON) as source of truth

```
$ yarn        // install monorepo dependencies
$ yarn build  // build tokens, css and react
$ yarn start  // open docs
```

#### Figma as source of truth

1. Create a .env file with the following variables:

   ```
   FIGMA_TOKEN=<enter your figma token here>
   FIGMA_FILE_ID=<enter your figma file here>
   USE_FIGMA_API=true
   ```

2. Run the following commands
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
