import styled from '@emotion/styled'

export const Wrapper = styled.div`
  padding: 0.8rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 601px) {
  width: 90%;
  }
  @media (min-width: 993px) {
  width: 80%;
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  color: #212121;
`

export const BrandLogo = styled.div`
  transition: 0.5s;
  height: 2.8rem;
  width: 2.8rem;
  margin-bottom: 0;
  margin-right: 0.5rem;
  &:hover {
    opacity: 0.7;
    transition: 0.5s;
    transform: rotate(360deg);
  }
`
