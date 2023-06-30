import { styled } from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const RadioPaymentContainer = styled(RadioGroup.Root)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  position: relative;
`

export const RadioPaymentItem = styled(RadioGroup.Item)`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  border: 1px solid transparent;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  padding: 1rem;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &[aria-checked='true'] {
    background: ${(props) => props.theme['purple-light']};
    border-color: ${(props) => props.theme.purple};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    line-height: 1.3;
    text-transform: uppercase;
  }

  svg {
    line-height: 0;
    width: 16px;
    height: 16px;
  }
`
export const RadioPaymentIndicator = styled(RadioGroup.Indicator)`
  position: absolute !important;
`
