import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { InputComponent } from './components/InputComponent'
import {
  AddressContainer,
  AddressContent,
  CheckoutContainer,
  CheckoutForm,
  FormContent,
  FormHeader,
  PaymentContainer,
  SelectedCoffeeSection,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutForm>
        <AddressContainer>
          <h2>Complete seu pedido</h2>
          <AddressContent>
            <FormHeader>
              <MapPinLine size={22} color={'#C47F17'} />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FormHeader>
            <FormContent>
              <InputComponent placeholder="CEP" size="sm" />
              <InputComponent placeholder="Rua" size="full" />
              <div>
                <InputComponent placeholder="Número" size="sm" />
                <InputComponent placeholder="Complemento" />
              </div>
              <div>
                <InputComponent placeholder="Bairro" size="sm" />
                <InputComponent placeholder="Cidade" size="md" />
                <InputComponent placeholder="UF" size="xs" />
              </div>
            </FormContent>
          </AddressContent>
          <PaymentContainer>
            <FormHeader>
              <CurrencyDollar size={22} color={'#8047F8'} />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </FormHeader>
          </PaymentContainer>
        </AddressContainer>
        <SelectedCoffeeSection>
          <h2>Cafés selecionados</h2>
          <div></div>
        </SelectedCoffeeSection>
      </CheckoutForm>
    </CheckoutContainer>
  )
}
