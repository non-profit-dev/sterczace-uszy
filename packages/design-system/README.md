# Design System for web pages

### Adding a new SVG icon

1. Export SVG code from the design file
2. Use the [SVGO tool](https://jakearchibald.github.io/svgomg/) to optimize the svg code
3. Create a new `.svg` file in the `design-system/icon` directory with a suitable icon name
4. Add the icon import to `design-system/components/icon/Icon.jsx` file and update the icons object:

```js
import Heart from "../../icons/Heart.svg"
import NewIcon from "../../icons/NewIcon.svg"

const icons = {
  heart: Heart,
  newIcon: NewIcon,
}
```

5. Make sure to update the `Icons.stories` file so that the icon gallery is always up to date.
