import { styled } from 'styled-components'

export const CoffeeContainer = styled.section`
  margin: 32px auto 9rem;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    font-family: 'Baloo 2';
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const CoffeeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 54px;
  grid-row-gap: 2.5rem;
  grid-column-gap: 2rem;
`
