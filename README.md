# Rollup.js-TypeScript import problem

```
./
+ client/src/index.ts
+ models/Account.ts
+ server/src/index.ts
```

Both of client's server's `index.ts` import a resource from `models/Account.ts`. The server's one works.

However, the client's bundler throws the following error. It looks rollup.js does not recognize the model code as TypeScript.

```console
$ npm run dev:client

> dev:client
> cd client && rollup -c


/home/ec2-user/projects/rad/svelte-ts/client/src/pages/home/index.ts → dest/assets/home...
[!] Error: Unexpected token (Note that you need plugins to import files that are not JavaScript)
../models/Account.ts (1:7)
1: export interface Account {
          ^
2:   name: string;
3: }
Error: Unexpected token (Note that you need plugins to import files that are not JavaScript)
    at error (/home/ec2-user/projects/rad/svelte-ts/node_modules/rollup/dist/shared/rollup.js:198:30)
    at Module.error (/home/ec2-user/projects/rad/svelte-ts/node_modules/rollup/dist/shared/rollup.js:12477:16)
    at Module.tryParse (/home/ec2-user/projects/rad/svelte-ts/node_modules/rollup/dist/shared/rollup.js:12853:25)
    at Module.setSource (/home/ec2-user/projects/rad/svelte-ts/node_modules/rollup/dist/shared/rollup.js:12756:24)
    at ModuleLoader.addModuleSource (/home/ec2-user/projects/rad/svelte-ts/node_modules/rollup/dist/shared/rollup.js:22220:20)
```
