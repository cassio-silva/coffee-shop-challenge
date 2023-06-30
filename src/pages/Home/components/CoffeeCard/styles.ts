import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};

  padding: 1.5rem;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  img {
    width: 120px;
    height: 120px;
    margin-top: -50px;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
  }

  div.tags {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    margin: 12px 0 16px;

    span {
      padding: 4px 8px;
      border-radius: 100px;
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};

      font-size: 0.625rem;
      font-family: 'Roboto';
      font-weight: 700;
      line-height: 1.3;
      text-transform: uppercase;
    }
  }

  strong {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
    text-align: center;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
  }
`

export const CoffeeCardFooter = styled.form`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  margin-top: auto;

  strong {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
    text-align: left;
    color: ${(props) => props.theme['base-text']};
    margin-bottom: unset;

    &::before {
      content: 'R$';
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      margin-right: 2px;
    }
  }
`
export const ButtonAddToCart = styled.button`
  border: 0;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  padding: 8px;
  border-radius: 6px;
  line-height: 0;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 1px 2px ${(props) => props.theme['purple-dark']};
  }
`
