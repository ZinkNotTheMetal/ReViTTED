# ReViTTED (Rev-it-ted)

## Copying

Starter Template using the following libraries:

* React (Re)
   * React Router DOM (v6)
* Vite  (Vi)
* TypeScript (T)
* Tailwind (T)
* ESLint (E)
  * Airbnb rules configured
* daisyUI (D)
* Running in Docker

## React

[React](https://github.com/facebook/react) made popular by Facebook, one of the most prolific Javascript libraries for building user interfaces.

Due to it's responsive rendering system and new features being added constantly this will be our main user interface renderor.

## Vite

[Vite](https://github.com/vitejs/vite) (pronounced Veet) is a fast frontend build tool. According to the README, it consists of two major parts:

* A dev server that serves your source files over native ES modules, with rich built-in features and astonishingly fast Hot Module Replacement (HMR).
* A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

## Typescript

[TypeScript](https://github.com/microsoft/TypeScript) allows developers to validate your Javascript ahead of runtime with static type checking.

TypeScript is a strict superset of Javascript that compiles our code into Javascript. It gives developers the advantage of typing and finding mistakes earlier on in the development process.

## Tailwind CSS

[Tailwind CSS](https://tailwindcss.com) is modern utility-first CSS framework. It provides many CSS rules, but these are purged when production builds. So developers do not worry about CSS asset size for performance optimization.

In VSCode, I recommend to use [intellisense extension](https://tailwindcss.com/docs/editor-setup).

## ESLint

[ESLint](https://eslint.org) is a plugin for your code and editor to ensure that you are following common conventions and standards.

### Airbnb Rules

[Airbnb Rules](https://github.com/iamturns/eslint-config-airbnb-typescript) for TypeScript

## daisyUI

[daisyUI](https://daisyui.com) is Tailwind CSS Components library.

It prepares components CSS classes such as 'btn'. If you provide 'btn' class to `<button>` element, then there should be placed completely designed button.

If you don't want to use it, just remove the package and remove config in tailwind.config.js.