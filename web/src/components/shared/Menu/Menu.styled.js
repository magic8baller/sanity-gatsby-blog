import styled from '@emotion/styled'

export const StyledMenu = styled.nav`
  display: ${({open}) => !open ? 'none' : 'flex'};
  
  flex-direction: column;
  justify-content: center;
  background: '#fff';
  height: 100vh;
  text-align: right;

  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
  @media (min-width: 576px){
    float: right;
  }
  a {
    padding: 1em 0;
    font-weight: bold;
    color: #020;
    text-decoration: none;
    transition: color 0.3s linear;
    font-size: 1.5rem;
    text-align: center;

    @media (min-width: 577px) {
      font-size: 2rem;
      text-align: right;
    }

    &:hover {
      color: #343078;
    }
  }
`
