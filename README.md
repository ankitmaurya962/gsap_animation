# GSAP Animated Landing Page

A minimal and stylish animated landing page built using **GSAP (GreenSock Animation Platform)**. This project demonstrates how to create smooth entrance animations for text, nav elements, and images using `gsap.from()`.

## 🌟 Features

- Animated navigation bar
- Layered rotating images with transitions
- Text reveal effects
- Custom font integration (Gilroy)

## 🔧 Technologies Used

- HTML
- CSS
- JavaScript
- [GSAP (v3.13)](https://greensock.com/gsap/)
- Unsplash images
- Gilroy custom font

## 🎨 Font

This project uses the **Gilroy** font, which is included in the `/assets/fonts` directory. The font is loaded using `@font-face` in `style.css`.

```css
@font-face {
    font-family: Gilroy;
    src: url('gilroy-regular-webfont.woff2') format('woff2'),
         url('gilroy-regular-webfont.woff') format('woff'),
         url('gilroy-regular-webfont.ttf') format('ttf');
    font-weight: lighter;
}
