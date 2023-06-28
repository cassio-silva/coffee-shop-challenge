import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  ButtonAddToCart,
  InputButtonControl,
  InputNumberContainer,
  InputNumberWrapper,
} from './styles'
import { Controller, useForm } from 'react-hook-form'
import { useContext } from 'react'
import {
  CheckoutContext,
  CheckoutListProps,
} from '../../../../../contexts/CheckoutContext'

interface NumberInputProps {
  amount: number
  id: number
}

export function NumberInput({ amount, id }: NumberInputProps) {
  const { handleRegisterCoffeeAmount } = useContext(CheckoutContext)
  const { register, handleSubmit, setValue, control } =
    useForm<CheckoutListProps>({
      defaultValues: {
        id,
        amount,
      },
    })

  function handleAddCoffee(currentValue: number) {
    setValue('amount', currentValue + 1)
  }

  function handleRemoveCoffee(currentValue: number) {
    if (currentValue > 0) {
      setValue('amount', currentValue - 1)
    }
  }

  return (
    <InputNumberContainer onSubmit={handleSubmit(handleRegisterCoffeeAmount)}>
      <Controller
        control={control}
        name="amount"
        render={({ field }) => (
          <InputNumberWrapper>
            <InputButtonControl
              type="button"
              onClick={() => handleRemoveCoffee(field.value)}
            >
              <Minus size={14} weight={'fill'} />
            </InputButtonControl>
            <input
              type="number"
              {...register('amount', {
                min: 1,
                max: 99,
              })}
            />
            <InputButtonControl
              type="button"
              onClick={() => handleAddCoffee(field.value)}
            >
              <Plus size={14} weight={'fill'} />
            </InputButtonControl>
          </InputNumberWrapper>
        )}
      />

      <ButtonAddToCart type="submit">
        <ShoppingCart size={22} weight={'fill'} />
      </ButtonAddToCart>
    </InputNumberContainer>
  )
}
