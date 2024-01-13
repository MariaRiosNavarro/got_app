# GOT Quotes App - Vite + Vue + Tailwind + Daisyui

I use 2 Apis

https://gameofthronesquotes.xyz/

And 

https://thronesapi.com/

(for some extra data & character images)

The Shields are from [shutterstock](https://www.shutterstock.com/catalog/collections/3278691911560333094-49488a0e3fbc4cc0e684c1f14a6c3ea94fe8c3959a5978043102afd03879eab5)



## [Vercel Deployment](got-app-three.vercel.app)


# IMAGES

### Home

The title of GOT-quotes has a link to Home, the navigation takes us to the corresponding pages.

![home](/public/imgReadme/home.png)

### Houses

Each house can be displayed with one click, offering information about the members of the house. Each of them has a link to their detailed character page.

![houses](/public/imgReadme/houses.png)
![houses](/public/imgReadme/houses2.png)

### Persons

Each character can be displayed with a click, giving information about their home and giving one of their quotes. These quote can be changed by clicking on the button that appears. The house badge is a link to the Detail House page.

![houses](/public/imgReadme/persons.png)
![houses](/public/imgReadme/persons2.png)

### Quotes

5 random quotes appear each time and can be changed by clicking on the button below.

![houses](/public/imgReadme/quotes.png)
![houses](/public/imgReadme/quotes2.png)

### Detail Person

Information with photo of all the characters mentioned in the api, if there is no photo, the logo is used as placeholder. The character's house is listed at the end and it has a link to its detailed page.

![houses](/public/imgReadme/personDetail.png)
### Detail House

Information with shield of all members of the house, each of them has a link to their detailed page. 

![houses](/public/imgReadme/houseDetail.png)
![houses](/public/imgReadme/houseDetail2.png)




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


