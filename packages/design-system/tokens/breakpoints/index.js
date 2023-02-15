const getBreakpoints = (bp) => {
  const obj = {}

  Object.keys(bp).forEach((key) => {
    obj[key] = `@media (max-width: ${bp[key]}px)`
  })

  return obj
}

const breakpoints = getBreakpoints({
  mobile: 390,
  mobileLg: 587,
  tablet: 744,
  tabletLg: 992,
  desktopSm: 1200,
  desktop: 1400,
})

export default breakpoints
