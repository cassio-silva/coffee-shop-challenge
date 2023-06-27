import { styled } from 'styled-components'

export const IntroContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 92px auto;
`

export const IntroFirstColumn = styled.article`
  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2';
    font-weight: bolder;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
    margin-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const IntroSecondColumn = styled.aside`
  img {
    width: 29.75rem;
    height: 22.5rem;
    margin-left: 3.5rem;
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1.25rem;
  margin-top: 4rem;
`

interface IntroItemProps {
  variant: 'yellow' | 'purple' | 'base-text' | 'yellow-dark'
}

export const IntroItem = styled.div<IntroItemProps>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;

  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};

  & > div {
    background: ${(props) => props.theme[props.variant]};
    border-radius: 50%;
    padding: 8px;
    line-height: 0;
  }

  svg {
    color: ${(props) => props.theme.white};
  }
`
