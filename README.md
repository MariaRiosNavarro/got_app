# GOT Quotes App - Vite + Vue + Tailwind + Daisyui


## [Vercel Deployment]()



# Setup


````
npm create vite@latest my-project -- --template vue
cd my-project
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i -D daisyui@latest
npm install vue-router@next
npm i axios

````


## tailwind.config.js

```javascript

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```


## style.css

```css

@tailwind base;
@tailwind components;
@tailwind utilities;

```


## vite.config.js 

(cors issue ->proxy for api)

```javascript
import vue from "@vitejs/plugin-vue";

export default {
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_VUE_API,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
};
```


