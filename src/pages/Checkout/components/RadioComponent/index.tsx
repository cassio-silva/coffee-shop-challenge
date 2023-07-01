import { useFormContext } from 'react-hook-form'
import {
  RadioPaymentContainer,
  RadioPaymentIndicator,
  RadioPaymentItem,
} from './styles'
import { Bank, CreditCard, Money } from 'phosphor-react'
import { CheckoutInfoProps } from '../..'

export function RadioComponent() {
  const { register, setValue } = useFormContext<CheckoutInfoProps>()

  return (
    <RadioPaymentContainer
      defaultValue={'credito'}
      {...register('address.paymentMethod', {
        onChange: (event) =>
          setValue('address.paymentMethod', event.target.value),
      })}
    >
      <RadioPaymentItem value="credito">
        <CreditCard size={16} color={'#8047F8'} />
        <p>Cartão de crédito</p>
        <RadioPaymentIndicator />
      </RadioPaymentItem>
      <RadioPaymentItem value="debito">
        <Bank size={16} color={'#8047F8'} />
        <p>Cartão de Débito</p>
        <RadioPaymentIndicator />
      </RadioPaymentItem>
      <RadioPaymentItem value="dinheiro">
        <Money size={16} color={'#8047F8'} />
        <p>dinheiro</p>
        <RadioPaymentIndicator />
      </RadioPaymentItem>
    </RadioPaymentContainer>
  )
}
