# Paradise Nursery Shopping Application

A React + Redux shopping app for browsing and purchasing plants. Users can explore plant categories, add items to the cart, update quantities, remove products, and continue shopping through the storefront.

## Features

- Landing page with branded storefront experience
- Plant catalogue grouped by category
- Add-to-cart functionality
- Cart with quantity updates and subtotal calculations
- Continue shopping flow
- Responsive layout for browsing on desktop and smaller screens

## Tech Stack

- React
- Vite
- Redux Toolkit
- React Redux

## Project Structure

```text
src/
  App.jsx
  AboutUs.jsx
  CartItem.jsx
  CartSlice.jsx
  ProductList.jsx
  store.js
  main.jsx
  App.css
  ProductList.css
  CartItem.css
  AboutUs.css
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local Vite URL shown in the terminal.

## Available Scripts

```bash
npm run dev     # start development server
npm run build   # create production build
npm run preview # preview production build locally
npm run lint    # run ESLint checks
```

## Usage

- Click "Get Started" from the landing page.
- Browse the available plant categories.
- Click "Add to Cart" for any plant you want to purchase.
- Open the cart to adjust quantities or remove items.
- Select "Continue Shopping" to return to the catalogue.

## Notes

This project demonstrates a simple e-commerce cart implementation using Redux state management in a React app.
