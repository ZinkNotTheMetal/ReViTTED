## How this project was setup

1. Install React with Vite
   ```bash
   yarn create vite ReViTTED --template react-ts
   ```

2. Install yarn packages
   ```bash
   cd ReViTTED
   yarn
   ```

3. Configure ESLint with Airbnb
   ```bash
   yarn add -D eslint eslint-config-airbnb eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
   ```

4. Setup .eslintrc & .eslintignore

5. Configure ESLint npm scripts
   ```json
    ...
    "eslint": "eslint --ext .jsx --ext .js --ext .tsx --ext .ts src/",
    "eslint-fix": "eslint --fix --ext .jsx --ext .js --ext .tsx --ext .ts src/",
    "ci:install": "yarn install",
    "ci:eslint": "yarn run eslint"
    ...
   ```

6. Install Tailwind CSS
   ```bash
   yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
   ```

7. Configure Post CSS Configuration Tailwind CSS
   1. Add postcss.config.js - Configure as needed

8. Configure Tailwind CSS
   1. Initialize Tailwind configuration
      ```bash
      npx tailwindcss init
      ```
   2. Add classes to index.css
      ```css
      /* src/index.css */
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      ```
   3. Configure Tailwind configuration file (tailwind.config.js)

9. Add daisyUI
   ```bash
   yarn add daisyUI
   ```

10. Add React Router DOM (v6)
   * Note that there have been some issues the major upgrade to version 6.
   * Okta does not support v6 yet but there is an open issue

