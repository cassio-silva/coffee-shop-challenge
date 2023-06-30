import { styled } from 'styled-components'

export const CheckoutContainer = styled.section`
  width: 100%;
  padding-bottom: 2rem;
`

export const CheckoutForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  h2 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const AddressContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const AddressContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  gap: 32px;
`

export const PaymentContainer = styled(AddressContent)``

export const FormHeader = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif;

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
  }

  svg {
    margin-right: 8px;
  }
`
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    gap: 0.75rem;
  }
`

export const SelectedCoffeeSection = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: 28rem;
`

export const SelectedCoffeeContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 2rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 44px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;

  div.coffeeWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 520px;
    overflow-y: auto;
    padding-right: 4px;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.yellow};
      outline: 0;
      border-radius: 8px;
      border: 0;
    }
  }
`

export const SelectedCoffeeCard = styled.div`
  display: flex;
  width: 100%;
  margin: 0.5rem 0;

  img {
    width: 64px;
    height: 64px;
    margin-right: 1.25rem;
  }

  strong {
    text-align: right;
    margin-left: auto;
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    line-height: 1.3;
    font-weight: 700;
  }
`

export const SelectedCoffeeCardContent = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
    margin-bottom: 8px;
    color: ${(props) => props.theme['base-subtitle']};
  }

  div {
    display: flex;
  }

  button.remove {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 2rem;
    padding: 0 8px;
    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};

    font-size: 0.75rem;
    line-height: 1.6;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
    transition: 0.2s;

    svg {
      color: ${(props) => props.theme.purple};
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 3px 1px ${(props) => props.theme['purple-dark']};
    }
  }
`
export const Separator = styled.div`
  width: 100%;
  min-height: 1px;
  background-color: ${(props) => props.theme['base-button']};
  margin: 1.5rem 0;
`

export const CheckoutResult = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  span {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};

    &:last-child {
      font-size: 1rem;
    }
  }

  strong {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const ButtonConfirmOrder = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  padding: 12px 0;

  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};

  &:hover {
    transition: 0.2s;
    background: ${(props) => props.theme['yellow-dark']};
  }
`
