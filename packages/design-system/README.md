# Design System for web pages

### Adding a new SVG icon

1. Export SVG code from the design file
2. Use the [SVGO tool](https://jakearchibald.github.io/svgomg/) to optimize the svg code
3. Create a new `.svg` file in the `design-system/icons` directory with a suitable icon name
4. Import a new icon into `design-system/components/icon/Icon.jsx` file, update the icons object:

```js
import Heart from "design-system/icons/Heart.svg"
import NewIcon from "design-system/icons/NewIcon.svg"

const icons = {
  heart: Heart,
  newIcon: NewIcon,
}
```

5. `Icons.stories` and `Icon.stories` will update automatically when you update the icons object so the icon gallery and icon stories are always up to date.
