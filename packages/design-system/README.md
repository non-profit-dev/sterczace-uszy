# Design System


The "design-system" package is designed to bring consistency to our pages and speed up the development process.

[👀 Storybook Preview](https://sterczace-uszy-ds.vercel.app/)

## Table of Contents 📃

- [Structure](#structure-)
- [How to use](#how-to-use-)
- [Adding a new element](#adding-a-new-element-)
- [Adding a new svg icon](#adding-a-new-svg-icon-)

## Structure 📦

This Design System follows the [Atomic Design 2.0 methodology](https://medium.com/@hannah.heinson/atomic-2-0-d94e5601200c) which allows us to create a well-structured and scalable system.

Here's how we organize our elements:

1. **Tokens** - these are foundational styles that form the building blocks of our design system. They cannot be broken down further and provide consistency throughout the interface.
2. **Components** - the most basic interface elements, components are small and distinct. They are the building blocks of our UI and can be easily reused in various contexts.
3. **Patterns** - they're combinations of two or more components, like cards or accordions, which work together to create more complex and functional elements.
4. **Blocks** - they're relatively more complex components that can function on their own, forming distinct sections of our interface. They provide flexibility and can be reused across different designs or layout templates.

## How to Use 🛠️

Using the design system is easy peasy! Just follow these steps:

1. In your React code, import the components you want to use:

```jsx
import Button from "design-system/components/button"
import Container from "design-system/components/container"

import TextBanner from "design-system/patterns/textBanner"
```

2. Use the imported stuff:

```jsx
const ExampleSection = () => (
  <Container>
    <TextBanner heading="Example heading" subtitle="Example subtitle" />

    <Button text="Click me" href="#" />
  </Container>
)
```

## Adding a new element 🧩

To make creating new design elements a breeze, we use [the Plop library](https://plopjs.com/). It helps generate elements with a proper structure in no time!

Here's how you can do it:

1. First, decide what kind of element you want to create: a component, pattern, or block.
2. Run one of these commands:

```bash
yarn plop component ComponentName
yarn plop pattern PatternName
yarn plop block BlockName
```

3. That's it! Plop will handle the rest and create the entire structure for you, so you don't have to start from scratch.

For example, running `yarn plop component NewComponent` will generate the following files for you:


```bash
✔  ++ /packages/design-system/components/newComponent/index.js
✔  ++ /packages/design-system/components/newComponent/NewComponent.jsx
✔  ++ /packages/design-system/components/newComponent/NewComponent.styled.js
✔  ++ /packages/design-system/components/newComponent/__tests__/NewComponent.test.jsx
✔  ++ /packages/design-system/components/newComponent/__stories__/NewComponent.stories.mdx
```

Now you can start working directly on your element's functionality without worrying about the initial setup. Happy coding!

## Adding a new SVG icon 🖼

To add a new SVG icon to our repository, follow these simple steps:

1. **Export SVG code:** Get the SVG code for the icon from the design file.
2. **Optimize the SVG code:** Use the [SVGO tool](https://jakearchibald.github.io/svgomg/) to optimize the SVG code for better performance.
3. **Create SVG file:** In the `design-system/icon`s directory, create a new `.svg` file and give it a suitable name.
4. **Import the icon**: Open the `design-system/components/icon/Icon.jsx` file and import the new icon like this:

```js
import Heart from "design-system/icons/Heart.svg"
import NewIcon from "design-system/icons/NewIcon.svg"

const icons = {
  heart: Heart,
  newIcon: NewIcon,
}
```

5. **Update Icons Object:** Add your new icon to the icons object, giving it a meaningful name.

The icon gallery and stories will automatically update when you update the icons object. So, your new icon will be part of the gallery, and everyone can easily use it.

That's it! Now our repository has a fresh, new SVG icon ready to be used in all the awesome places! 🎉

