import styled from 'styled-components'

export const InputNumberContainer = styled.div`
  display: flex;
`
interface InputNumberWrapperProps {
  $size?: string
}

export const InputNumberWrapper = styled.div<InputNumberWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['base-button']};
  margin-right: 8px;
  border-radius: 6px;
  margin-left: auto;
  height: ${(props) => (props.$size ? props.$size : '100%')};

  input[type='number'] {
    border: 0;
    width: 22px;

    font-size: 1rem;
    text-align: center;
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
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 100%;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};
  border: 0;
  border-radius: 6px;
  padding: 8px 0;
  transition: 0.2s;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
    background: ${(props) => props.theme['base-hover']};

    svg {
      line-height: 0;
    }
  }

  &:focus {
    outline: 0;
  }
`
