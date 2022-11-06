# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

[Desktop](src/assets/design/card-desktop.png)
[Mobile](src/assets/design/card-desktop.png)

### Links

- Live Site URL: [Deployed Application](https://product-preview-card-component-sand.vercel.app/)
- Solution URL: [Completed Solution](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa/hub/product-preview-card-component-eUaj4L5zEl)

## My process

I started with the mobile design and wrote out all of the markup in a single `App.jsx` component. Starting from the top of the component, I wrote my CSS classes to get the component looking as close to the design as possible, making modifications to the default Tailwind CSS theme to include the design palette.

Once I was satisfied with the mobile version, I tackled the desktop version. I noticed that the only difference between the two versions was the positioning of the product image and the images themselves. So, I wrote a React Hook to monitor the screen size and swap the source path of the image component on the mobile breakpoint, and used Flexbox + a `sm` breakpoint to shift the image position relative to the card.

After everything was looking correct, I refactored the project to split all of the markup into their own components for maximum organization and re-usability.

### Built with

- Semantic HTML5 markup
- Tailwind CSS with custom theme settings - [Tailwind CSS](https://tailwindcss.com/)
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

The biggest thing I learned was how to use the `window` object to monitor the current screen size to allow JavaScript to swap out the image URL for me at the correct screen size. This was also my first Tailwind project and the workflow I used adjusted significantly with some great efficiency gains.

The Hook I wrote is below. One of my favorite things to do in a React project is identify potentially reusable logic and write Hooks for them. 😊

```js
import { useState, useEffect } from "react";

const useURL = ({ mobile, desktop }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [url, setUrl] = useState(mobile);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (width >= 640) {
      setUrl(desktop);
    } else {
      setUrl(mobile);
    }
  }, [width]);

  return url;
};

export default useURL;
```

### Continued development

CSS is a mountain I am determined to climb. My skills have dramatically improved, but there's still so much to learn. I plan to work on much more complex layouts and design requirements to increase my CSS vocabulary and confidence.

## Author

- Website - [JJ Vega](https://github.com/jjvega86)
- Frontend Mentor - [@jjvega86](https://www.frontendmentor.io/profile/jjvega86)
