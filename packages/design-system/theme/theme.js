const getBreakpoints = (bp) => {
  const obj = {}

  Object.keys(bp).forEach((key) => {
    obj[key] = `@media (max-width: ${bp[key]}px)`
  })

  return obj
}

const theme = {
  containerHeight: "100vh",
  defaultPadding: "16px",
  fontStyles: {
    primaryFontFamily: "'Poppins', sans-serif",
  },
  colors: {
    primary: {
      100: "#FCDDDF",
      200: "#F9BBBF",
      300: "#F5989F",
      400: "#EF5460",
      500: "#C1121F",
    },
    neutrals: {
      100: "#FFFEFE",
      200: "#FEF9F8",
      300: "#FBEDE8",
      400: "#F8DFD8",
      500: "#F4CEC3",
    },
    grey: {
      100: "#EBEBEB",
      200: "#DFDFDF",
      300: "#C4C4C4",
      400: "#818181",
      500: "#414141",
      600: "#020202",
    },
    complementary: {
      100: "#FEF8EC",
    },
    decorative: {
      100: "#0D99FF",
    },
  },
  spacings: {
    xxsmall: "4px",
    xsmall: "8px",
    small: "12px",
    medium: "16px",
    large: "24px",
    xlarge: "48px",
    xxlarge: "80px",
    xxxlarge: "120px",
  },
  typography: {
    desktop: {
      h1: {
        fontWeight: 600,
        fontSize: "60px",
        lineHeight: "120% ",
        fontFamily: "Poppins",
      },
      h2: {
        fontWeight: 600,
        fontSize: "48px",
        lineHeight: "120%",
        fontFamily: "Poppins",
      },
      h3: {
        fontWeight: 600,
        fontSize: "28px",
        lineHeight: "120%",
        fontFamily: "Poppins",
      },
      h4: {
        fontWeight: 600,
        fontSize: "24px",
        lineHeight: "125%",
        fontFamily: "Poppins",
      },
      h5: {
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: "120%",
        fontFamily: "Poppins",
      },
      h6: {
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "130%",
        fontFamily: "Poppins",
      },
      bodyLarge: {
        fontWeight: 300,
        fontSize: "22px",
        lineHeight: "150%",
        fontFamily: "Poppins",
      },
      bodySmall: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "140%",
        fontFamily: "Poppins",
      },
      bodyTitle: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "130%",
        fontFamily: "Poppins",
      },
      bodyTiny: {
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "140%",
        fontFamily: "Poppins",
      },
    },
    tablet: {
      h1: {
        fontWeight: 600,
        fontSize: "48px",
        lineHeight: "125%",
        fontFamily: "Poppins",
      },
      h2: {
        fontWeight: 600,
        fontSize: "40px",
        lineHeight: "120%",
        fontFamily: "Poppins",
      },
      h3: {
        fontWeight: 600,
        fontSize: "30px",
        lineHeight: "150% ",
        fontFamily: "Poppins",
      },
      h4: {
        fontWeight: 600,
        fontSize: "28px",
        lineHeight: "125%",
        fontFamily: "Poppins",
      },
      h5: {
        fontWeight: 600,
        fontSize: "22px",
        lineHeight: "150%",
        fontFamily: "Poppins",
      },
      h6: {
        fontWeight: 700,
        fontSize: "18px",
        lineHeight: "150%",
        fontFamily: "Poppins",
      },
      bodyLarge: {
        fontWeight: 400,
        fontSize: "22px",
        lineHeight: "145%", 
        fontFamily: "Poppins",
      },
      bodySmall: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "150%",
        fontFamily: "Poppins",
      },
      bodyTitle: {
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "145%",
        fontFamily: "Poppins",
      },
      bodyTiny: {
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "140%",
        fontFamily: "Poppins",
      },
    },
    mobile: {
      h1: {
        fontWeight: 600,
        fontSize: "40px",
        lineHeight: "100%",
        fontFamily: "Poppins",
      },
      h2: {
        fontWeight: 600,
        fontSize: "36px",
        lineHeight: "110%",
        fontFamily: "Poppins",
      },
      h3: {
        fontWeight: 600,
        fontSize: "24px",
        lineHeight: "150%",
        fontFamily: "Poppins",
      },
      h4: {
        fontWeight: 600,
        fontSize: "22px",
        lineHeight: "150%",
        fontFamily: "Poppins",
      },
      h5: {
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: "150%",
        fontFamily: "Poppins",
      },
      h6: {
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "120%",
        fontFamily: "Poppins",
      },
      bodyLarge: {
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "130%",
        fontFamily: "Poppins",
      },
      bodySmall: {
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "140%",
        fontFamily: "Poppins",
      },
      bodyTitle: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "130%",
        fontFamily: "Poppins",
      },
      bodyTiny: {
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "120%",
        fontFamily: "Poppins",
      },
    },
  },
  breakpoints: getBreakpoints({
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  }),
}

export default theme
  