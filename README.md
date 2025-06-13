This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## In this tutorial we are having a look over the:

### Routing

### Nested routes

### Dynamic routes

### Nested dynamic routes

### Catch all segments

http://localhost:3000/docs/feature1
http://localhost:3000/docs/feature2/example3

### Not found page

### File Colocation

### Pivate folders

Add \_ at the start of the page
http://localhost:3000/\_lib

If we would like to have \_ in the routing we could use %5F
http://localhost:3000/\_test

### Route grouping

use () for route grouping - (auth) / login

### Layouts

Page are route-specific UI components
A layout is UI that is shared between multiple pages in your app

### Nested layouts

### Link component

### Active link

http://localhost:3000/forgot-password

### Params and search params

params is a promise that resolves to an object containing the dynamic route parameters (like id)
searchParams is a promise that resolves to an object containing the query parameters (like filters and sorting)

http://localhost:3000/articles/breaking-news-123?lang=fr

### Navigating Programmatically

http://localhost:3000/order-product

### Templates / Layouts

Templates:
Not persistent: A new instance is created each time the route is loaded.
Layouts:
Persistent: It is shared and preserved between navigations.
