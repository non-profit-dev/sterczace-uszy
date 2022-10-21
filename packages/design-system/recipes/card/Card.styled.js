import styled from "@emotion/styled"

const variants = {
  simple: {
    // typography: theme.typography.desktop.bodySmall,
    padding: "36px 20px",
  },
  illustrationWithoutText: {
    // typography: theme.typography.desktop.h5,
    padding: "10px 40px",
  },
}

export const Card = styled.a`
  display: flex;
  border: 1px solid green;
  width: 100%;
  color: "black";
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
export const IllustrationContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  border: 1px solid blue;
  width: 100%;
  padding: 29px 0px 0px 0px;
`
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid blue;
  width: 100%;
  padding: 0px;
  margin: 5px;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${({ cardVariant }) => variants[cardVariant].padding};
`

// TODO paddings depends of card variant
// ${({variant}) => {
//   switch (variant) {
//     case 'onlyTop':
//       return `
//         border-top-left-radius: 15px;
//         border-top-right-radius: 15px;
//       `;

//     case 'onlyBottom':
//       return `
//         border-bottom-left-radius: 15px;
//         border-bottom-right-radius: 15px;
//       `;

//     case 'allCorners':
//       return `
//         border-radius: 15px;
//       `;
//   }
// }}};
