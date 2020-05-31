import styled from '@emotion/styled'
// InstaFeed
export const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.5);
z-index: 2;
opacity: 0;
transition: all 0.3s ease 0s;
`
export const Info = styled.div`
opacity: 0;
transition: all 0.4s ease 0s;
text-align: center;
color: white;
top: 12em;
align-items: center;
span,
.icon {
  bottom: 2em;
 padding: 1%;
  margin: 0 auto;
}
`
export const Content = styled.div`
z-index: 10;
position: absolute;
left: 0;
top: 0;
right: 0;
bottom: 0;
`
export const Wrapper = styled.a`
display: block;
box-shadow: 0;
position: relative;
margin: 0.5rem;
max-width: calc(33% - 1rem);
width: 120px;
> div img {
  transition: all 0.3s ease 0s !important;
}
:focus,
:hover {
  ${Overlay} {
    opacity: 1;
  }
  ${Info} {
    opacity: 1;
  }
}
`
