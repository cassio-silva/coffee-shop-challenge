import styled from 'styled-components'

export const InputNumberContainer = styled.form`
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

export const InputButtonControl = styled.button`
  display: flex;
  flex: 1;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};
  border: 0;
  border-radius: 6px;
  padding: 8px;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 3px 2px ${(props) => props.theme.purple};
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
