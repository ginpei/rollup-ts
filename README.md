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
