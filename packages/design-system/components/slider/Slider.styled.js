import styled from "@emotion/styled"

export const Pagination = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.colors.primary[400]};
    &:after {
      font-size: 15px;
    }
  }
  .swiper-button-disabled {
    color: ${({ theme }) => theme.colors.grey[300]};
  }
  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.primary[200]};
  }

  .swiper-pagination-bullet-active {
    color: ${({ theme }) => theme.colors.primary[300]};
  }
`
