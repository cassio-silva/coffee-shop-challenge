import styled from 'styled-components'

export const InputNumberContainer = styled.div`
  display: flex;
  margin-left: auto;
`
export const InputNumberWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['base-button']};
  margin-right: 8px;
  border-radius: 6px;

  input {
    border: 0;
    width: 22px;
    text-align: center;
    font-size: 1rem;
    background: transparent;
    font-family: 'Roboto';
    color: ${(props) => props.theme['base-text']};

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    -moz-appearance: textfield;

    &:focus {
      outline: 0;
    }
  }
`
interface InputButtonControlProps {
  variant: 'minus' | 'plus'
}

export const InputButtonControl = styled.button<InputButtonControlProps>`
  display: flex;
  flex: 1;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};
  border: 0;
  padding: 8px;
  transition: color 0.2s;

  &:hover,
  &:focus {
    color: ${(props) => props.theme['purple-dark']};
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

  &:hover,
  &:focus {
    background: ${(props) => props.theme.purple};
  }
`
