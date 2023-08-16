# Frontend App

This package holds all the web pages developed using [Next.js](https://nextjs.org/docs).

⚡️ The app is currently live and accessible at [sterczaceuszy.pl/](https://www.sterczaceuszy.pl/)

## Table of Contents 📃

- [Structure](#structure-)
  - [lib](#lib)
  - [pages](#pages)
  - [public](#public)
  - [templates](#templates)

## Structure 📦

Here's an overview of the project's folder structure:

```
frontend/
├── app
  ├── lib
  ├── pages
  ├── public
  └── templates
```

### `lib`

The lib directory holds external API libraries and utilities, including GraphQL queries and Google Analytics integration.

This separation keeps the core logic organized and easily maintainable.

### `pages`

In Next.js, the pages directory is where you create your application's routes and associate them with React components.

For instance, if you create a file like `about.js` within the `pages` directory, exporting a React component, it will automatically be accessible at the route `/about`.

Example:`.

```js
// pages/about.js
export default function About() {
  return <div>About</div>
}
```

[Learn more about pages and routes](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts)

### `public`

The public directory serves as the repository for static assets that can be referenced by your application.
Files like images are accessible from the base URL ("/").

For instance, if you place an image `me.png` inside the `public` directory, you can use it in your code like this:

```jsx
import Image from "next/image"

export function Avatar() {
  return <Image src="/me.png" alt="me" width="64" height="64" />
}
```

For better organization, each page should have its own directory within the `public` folder. This helps maintain a clean and structured project layout.

### `templates`

Templates are complete views built with our design system. They offer a comprehensive page structure with integrated data.

It's essential to note that every page added to the pages directory should have its corresponding template.
