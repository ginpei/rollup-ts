# Rollup.js-TypeScript import problem

```
./
├── client/src/
│   └── index.ts
├── models/
│   └── Account.ts
└── server/src/
    └── index.ts
```

Both of client's and server's `index.ts` import a resource from `models/Account.ts`. The server's one works.

However, the client's bundler throws an error printed below later. It looks rollup.js does not recognize the model code as TypeScript.

```ts
// client/src/index.ts

import { getName } from "../../models/Account";

console.log(getName());
```

```ts
// models/Account.ts

export interface Account {
  name: string;
}

export function getName(): string {
  return 'name';
}
```

```console
$ npm run dev:client

> dev:client
> cd client && rollup -c


/.../client/src/pages/home/index.ts → dest/assets/home...
[!] Error: Unexpected token (Note that you need plugins to import files that are not JavaScript)
../models/Account.ts (1:7)
1: export interface Account {
          ^
2:   name: string;
3: }
Error: Unexpected token (Note that you need plugins to import files that are not JavaScript)
    at error (/.../node_modules/rollup/dist/shared/rollup.js:198:30)
    at Module.error (/.../node_modules/rollup/dist/shared/rollup.js:12477:16)
    at Module.tryParse (/.../node_modules/rollup/dist/shared/rollup.js:12853:25)
    at Module.setSource (/.../node_modules/rollup/dist/shared/rollup.js:12756:24)
    at ModuleLoader.addModuleSource (/.../node_modules/rollup/dist/shared/rollup.js:22220:20)
```
