import styled, { css } from 'styled-components'

interface InputFormComponentProps {
  $size: 'full' | 'xs' | 'sm' | 'md' | 'large'
}

export const InputFormComponent = styled.input`
  width: 100%;
  height: 1.125rem;
  background: transparent;
  border: 0;

  font-size: 0.875rem;
  font-family: 'Roboto', sans-serif;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
export const InputFormComponentWrapper = styled.div<InputFormComponentProps>`
  border-radius: 6px;
  background: ${(props) => props.theme['base-input']};
  padding: 12px;
  border: 1px solid transparent;

  &:focus-within {
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  ${(props) =>
    props.$size === 'full' &&
    css`
      width: 100%;
    `}
  ${(props) =>
    props.$size === 'large' &&
    css`
      width: 21.75rem;
    `}
  ${(props) =>
    props.$size === 'md' &&
    css`
      width: 17.25rem;
    `}
  ${(props) =>
    props.$size === 'sm' &&
    css`
      width: 12.5rem;
    `}
  ${(props) =>
    props.$size === 'xs' &&
    css`
      width: 3.75rem;
    `}
`
