# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# CampusEats

CampusEats is a React web app for ordering food from shops around the IIUM campus. Customers browse vendors, view a menu, add items to a cart, check out with a pickup time and mahallah, and see their past orders. My shop is **Ian Café** (Mahallah Salahuddin, Block F), and my personal feature is **Favourite Items**.

Built for BICS 3301 Cross-Platform Software Development, Section 1 (M1: React milestone).

- **Name:** Ian Darwisy bin Zuraihan
- **Matric No.:** 2415493

## Features

- Vendor list with opening hours and an open/closed status
- Menu page for each vendor, with sold-out items disabled
- Cart with quantity changes, remove, and a running total
- Checkout form with validation (name of at least 3 characters, a mahallah, pickup time between 07:00 and 22:00)
- Orders page showing placed orders
- Loading and error states when the menu data is fetched, with a "Try again" button
- 404 page and a "Vendor not found" message for unknown URLs
- Cart, orders and favourites are saved in `localStorage`, so they survive a refresh

### Personal feature: Favourite Items

- Tap the heart on any menu item to add or remove it from your favourites
- A **Favourites** page (`/favourites`) lists favourited items from every vendor
- A **Show Favourites Only** checkbox on each vendor page filters that vendor's menu
- Favourites are stored as a list of item ids, so names, prices and availability always come from the vendor data

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Then open the address Vite prints (usually http://localhost:5173).

| Command           | What it does                       |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the development server       |
| `npm run build`   | Build for production into `dist/`  |
| `npm run preview` | Serve the production build locally |
| `npm run lint`    | Run ESLint                         |

## Routes

| Path          | Page                                                         |
| ------------- | ------------------------------------------------------------ |
| `/`           | Vendor list                                                  |
| `/vendor/:id` | Menu for one vendor (the selected vendor is kept in the URL) |
| `/cart`       | Cart and checkout                                            |
| `/orders`     | Placed orders                                                |
| `/favourites` | Favourite items (personal feature)                           |
| `*`           | Not found                                                    |

## Project structure

```
src/
  App.jsx              Router and route table
  main.jsx             App entry point
  components/          Header, Footer, VendorCard, MenuList, MenuItemCard,
                       CartItem, CheckoutForm, Status (Loading / ErrorMessage)
  pages/               Layout, HomePage, VendorPage, CartPage, OrdersPage,
                       FavouritesPage, NotFoundPage
  context/             CartProvider (cart, orders, favourites)
  hooks/               useCart, useVendors, useLocalStorage
public/api/
  vendors.json         Vendor and menu data, fetched at runtime
```

## Where state lives

- **Cart, orders, favourites:** `CartProvider` (React context), saved to `localStorage` with the `useLocalStorage` hook. Several unrelated components need them, so they sit above the routes.
- **Vendors, loading, error:** `useVendors` hook, used by the pages that show vendor data.
- **Checkout form values and errors:** local state in `CheckoutForm`.
- **Selected vendor:** the `:id` in the URL, read with `useParams()`.

## Tech stack

React 19, React Router 8, Vite, ESLint.

## Credits

`public/api/vendors.json` combines the shops of several classmates. Each shop's id starts with its owner's matric number so item ids do not clash. Thank you to:

- **Ian Café:** my own shop (2415493)
- **Republic of Ayam Gepuk:** [MUHAMMAD NAUFAL BIN MUHADELY], matric 2415143
- **Chef Haddif Expert:** [HADDIF ASJAD BIN AHMAD HADISHAM], matric 2412181

## AI use

I used AI tools while building this project. The details are in [`AI_USAGE.md`](./AI_USAGE.md).
