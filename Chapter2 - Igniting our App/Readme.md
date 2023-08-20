## NPM 👨‍💼

> It is a popular command-line tool and package manager for JavaScript developers, primarily used in the context of Node.js applications. npm allows developers to easily install, manage, and share code packages (also known as "packages" or "modules") that extend the functionality of their JavaScript projects.
>
> How to initialize `npm`?
>
> ```
> npm init
> ```
>
> `npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.

## Parcel (Why do we need it?) 📦

> Parcel is a fast, zero-configuration web application bundler. It's designed to simplify the process of building modern web applications by automating many of the tasks typically involved in bundling and optimizing assets like JavaScript, CSS, and images.

**Zero Configuration** : Parcel does not require extensive configuration setups. You can start using it with very little configuration, which is especially helpful for beginners or when you want to quickly prototype a React application without spending time on complex build configurations.

**Fast Development Workflow** : Parcel's fast bundling process speeds up development iterations. It has built-in development server with hot module replacement, meaning you see your changes in the browser instantly without manual refreshes.

**Optimized Production Builds** : While being simple to set up, Parcel still offers optimizations for production builds. It automatically minifies and optimizes your code, generating optimized assets ready for deployment.

**Support for ES6 Modules** : Parcel has native support for ES6 modules, which aligns well with modern JavaScript development, including the module system used in React.

**Extensible** : Although it's designed to be simple, Parcel can still be extended if you need custom configurations or have specific requirements for your project.

**Parcel Features:**

* HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
* File watcher algorithm - made with C++
* Minification
* Cleaning our code
* DEV and production Build
* Super fast building algorithm
* Image optimization
* Caching while development
* Compresses
* Compatible with older version of browser
* HTTPS in dev
* Port Number
* Consistent hashing algorithm
* Zero Configuration
* Automatic code splitting

**Installation commands:**

Install:

```
npm install -D parcel
```

`-D` is used for development and as a development dependency.


**Parcel Commands :**

For development build:

```
npx parcel <entry_point> 
```

For production build :

```
npx parcel build <entry_point> 
```


## .parcel-cache 🗳

> The ".parcel-cache" directory is used by Parcel to store cached build results and speed up future builds. It helps avoid recompiling unchanged files, optimizes assets, and improves incremental builds. You generally don't need to interact with it directly.

## NPX 👷‍♂️

> `npx` is a command-line tool that comes with `npm` (Node Package Manager). It's used to execute Node.js packages or binaries directly from the terminal without having to install them globally or add them to your project dependencies.

> In short, `npx` lets you run command-line tools or scripts from packages without the need for manual installation, making it convenient for running one-off tasks or using tools that you don't want to install globally.

## Dependencies Vs Dev Dependencies

`Dependencies` should contain library and framework in which your app is built on, needs to function effectively. such as Vue, React, Angular, Express, JQuery and etc.
`DevDependencies` should contain modules/packages a developer needs during development.
such as, `parcel, webpack, vite, mocha`.
`These packages` are `necessary only while you are developing your project`, not necessary on production.
To save a dependency as a devDependency on installation we need to do,

```
npm install --save-dev
```

instead of just,

```
npm install --save
```


## Tree Shaking 🌲

Tree shaking is like a smart cleaner for your JavaScript code in React (and other modern JavaScript environments). Imagine you have a large collection of toys, but you only want to keep the ones you actually use and throw away the rest to keep your room tidy and efficient.

In a React app, you use various JavaScript modules and libraries to build your components. Some of these modules might provide functions, classes, or other code that you don't actually use in your app. Tree shaking is the process of removing this unused code from your final production bundle.

> For example, if you import a library that has many functions, but you only use one of them in your React component, tree shaking will identify the unused functions and remove them, making your app's bundle smaller and faster to load.

Tree shaking is an important optimization in modern JavaScript build tools (like webpack or Parcel) because it helps keep your app's codebase efficient, leading to faster load times for users and a more manageable development experience for you.

## HOT MODULE REPLACEMENT 🔥

> Hot Module Replacement (HMR) is a feature in modern development tools that allows you to update parts of your application in real-time without needing to refresh the entire page. It's like swapping out a piece of a puzzle while the puzzle is still being put together.

In a React context, when you're making changes to your components or styles, HMR will automatically detect those changes and apply them to your running application without requiring you to manually refresh the browser. This can significantly speed up the development process by providing immediate visual feedback for the changes you're making.

HMR is especially useful for rapid iteration during development, as it helps you see the effects of your code changes immediately, making the development workflow smoother and more efficient.

## 5 Super Power of Parcel 💪

* Hot Module Replacement (HMR)** : HMR is a critical feature for efficient development. With HMR, when you make changes to your code (like modifying a component), Parcel intelligently updates only the modified module in the browser without a full page refresh. This significantly speeds up the development process, allowing you to see immediate updates and maintaining the application's state.
* **Code Splitting** : Code splitting is crucial for optimizing the loading performance of web applications. Parcel automatically analyzes your code and breaks it into smaller chunks. This means that only the code required for a specific page or route is loaded, reducing initial loading times and improving the user experience.
* **Tree Shaking** : Tree shaking is a technique used to remove unused or dead code from your production bundle. This helps in reducing the size of the bundle, resulting in faster load times for your application. Parcel automatically performs tree shaking, ensuring that only the code that's actually being used gets included in the final bundle.
* **Image Optimization** : Parcel offers automatic image optimization as part of its asset transformation process. This optimization reduces the file size of images while maintaining reasonable visual quality. This is essential for optimizing web performance, especially for applications that rely on images.
* **Caching** : Caching is a powerful feature that speeds up build times. Parcel caches intermediate build results, which means that if you're working on a project and haven't changed certain parts of the code, Parcel can reuse those cached results instead of rebuilding everything from scratch. This leads to faster subsequent builds, especially during development, where you often make small changes.

## .gitignore 😵

> `gitignore` is a file that tells Git which files and folders to ignore when tracking changes. Put in it:

* Build artifacts (e.g., `node_modules/`, `dist/`)
* IDE/editor files (e.g., `.vscode/`, `.idea/`)
* Sensitive info (e.g., `.env`, `secrets.json`)
* System files (e.g., `.DS_Store`, `Thumbs.db`)
* Logs/temporary files (e.g., `*.log`, `*.tmp`)

## package.json Vs package-lock.json 🔒

`package.json`:

* This file is mandatory for every project
* It contains basic information about the project
* Application name/version/scripts

`package-lock.json`:

* This file is automatically generated for those operations where npm modifies either the node_module tree or package-json.
* It is generated after an npm install
* It allows future devs & automated systems to download the same dependencies as the project.
* it also allows to go back to the past version of the dependencies without actual
  ‘committing the node_modules folder.
* It records the same version of the installed packages which allows to reinstall them.
  Future installs will be capable of building identical description tree.

**~** or **^** in `package.json` file :
These are used with the versions of the package installed.

For example  in `package.json` file:

```
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```

* **~** : `Approximately equivalent to version`, will update you to all future patch versions, without incrementing the minor version.
* **^** : `Compatible with version`, will update you to all future minor/patch versions, without incrementing the major version.

> If none of them is present, that means only the version specified in `package.json` file is used in the development.
>

## Why should not modify package.json? ❌

`package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

## node_modules ⭕

`node_modules` folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path).
`Don't push node_modules`in github because it contains lots of files(more than 100 MB), it will cost you memory space.

## dist folder 📂

The `/dist` folder contains the minimized version of the source code. The code present in the `/dist` folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.

## browserlists 🌐

`Browserslist` is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.
