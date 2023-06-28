import { styled } from 'styled-components'

export const CheckoutContainer = styled.section`
  width: 100%;
`

export const CheckoutForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const SelectedCoffeeSection = styled.aside`
  width: 100%;
  max-width: 28rem;
`

export const AddressContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
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
    display: flex;
    align-items: center;

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
