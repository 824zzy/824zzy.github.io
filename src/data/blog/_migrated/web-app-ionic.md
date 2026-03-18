---
author: Zhengyuan Zhu
pubDatetime: 2018-04-17T00:00:00Z
title: "ionic Common Error Solutions & Common Commands"
slug: web-app-ionic
featured: false
draft: false
tags:
  - notes
description: ""
---

## Common Errors

-

**npm WARN checkPermissions Missing write access to**
**Solution**

-

Solution 1

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/web-app-ionic-1.png)

-

Solution 2

- sudo npm i -g npm // Reinstall npm globally

- sudo chown -R your_user_name /usr/local/lib // Modify npm folder permissions

-

Downloading and extracting blank starter - failed!Error: socket hang up
**Solution**:

- Solution for specific version: [https://www.jianshu.com/p/6509070114e2](https://www.jianshu.com/p/6509070114e2)

- sudo cnpm install -g ionic cordova // Core principle to remember: **Use cnpm whenever possible instead of npm**

- ionic start myApp [https://github.com/ionic-team/starters](https://github.com/ionic-team/starters) // If the template source website is not responding, you can try to directly clone source code from github

-

ERROR] The package.json file seems malformed.
**Solution**:

```
`In to of package.json at the root(base level), add 'name' key like "name": "My_App_Name",.
Also at same base level add "author": "YourName",
`
```

-

If you need to install dependencies

  cnpm install –save (Remember to save after installing packages, this step is very easy to forget)

-

➜  ionicdemo ionic serve
Error: Cannot find module 'tslint'
  at Function.Module._resolveFilename (module.js:547:15)
  at Function.Module._load (module.js:474:25)
  at Module.require (module.js:596:17)
  at require (internal/module.js:11:18)
  at Object. (/Users/zzy824/ionicPrijects/ionicdemo/node*modules/*@ionic_app-scripts@3.1.8@@ionic/app-scripts/dist/lint/lint-factory.js:3:16)
  at Module._compile (module.js:652:30)
  at Object.Module._extensions..js (module.js:663:10)
  at Module.load (module.js:565:32)
  at tryModuleLoad (module.js:505:12)
  at Function.Module._load (module.js:497:3)

  **solution**:

```
`> rm -rf node_modules
> npm restart
> npm update
> cnpm install --save
`
```

-

npm install appears "Unexpected end of JSON input while parsing near"

npm cache clean –force

- Calling camera in ionic

Prepare plugman in advance: a command line tool specifically for providing plugins for cordova
        npm installd -g plugman
The first step is to install ionic-native/core. This step cannot be skipped for all Native features.
        npm install @ionic-native/core –save

- "/usr/bin/env: node: No such file or directory"
Create symbolic link: `ln -s /usr/bin/nodejs /usr/bin/node`

## Common Commands

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22

```

```
//Download dependencies
cnpm i
//Mobile launch
ionic serve -l

//Run project on a connected device
ionic cordova run [platform] [options]
ionic cordova run [ios/android] [-lc]

//Need to install platform to run on ios phone
ionic cordova platform add ios
ionic cordova platform add android

//Package after modifying code on platform
ionic build
//Test on phoneGap
ionic cordova plugin add phonegap-plugin-local-notification
npm install --save @ionic-native/phonegap-local-notification
//Declare a component
ionic g component [component name]
//Declare a new page
ionic g page [page name]

```

>

References

- [https://blog.csdn.net/yuxiaofan1245023886/article/details/52251410](https://blog.csdn.net/yuxiaofan1245023886/article/details/52251410)

- [http://www.jb51.net/article/115645.htm](http://www.jb51.net/article/115645.htm)

- [https://github.com/nodejs/node-v0.x-archive/issues/3911](https://github.com/nodejs/node-v0.x-archive/issues/3911)
