import { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import {
  RadioPaymentContainer,
  RadioPaymentIndicator,
  RadioPaymentItem,
} from './styles'
import { Bank, CreditCard, Money } from 'phosphor-react'

interface RadioComponentProps {
  name: string
  register: UseFormRegister<any>
  setValue: UseFormSetValue<any>
}

export function RadioComponent({
  name,
  register,
  setValue,
}: RadioComponentProps) {
  return (
    <RadioPaymentContainer
      defaultValue={'credito'}
      {...register(name, {
        onChange: (event) => setValue(name, event.target.value),
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
