import styled from '@emotion/styled'

export const Links = styled.div`
  a {
    color: #6d6d6d;
    text-decoration: none;
    &.current {
      color: #212121;
    }
  }
  ${({desktop}) =>
    desktop
      ? `
        @media (max-width: 960px) {
            display: none;
        }
        a {
            margin-right: 1rem;
            &:last-child {
                margin-right: unset;
            }
        }
    `
      : `
        padding: 3rem;
        display: flex;
        flex-direction: column;
        a {
            margin-bottom: 1rem;
            &:last-child {
                margin-bottom: unset;
            }
        }
    `}
`
