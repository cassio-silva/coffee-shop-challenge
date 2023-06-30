import { useForm } from 'react-hook-form'
import { CoffeeProps } from '../OurCoffee/coffeeData'
import { CheckoutContext } from '../../../../contexts/CheckoutContext'
import {
  ButtonAddToCart,
  CoffeeCardContainer,
  CoffeeCardFooter,
} from './styles'
import { NumberInput } from '../../../../components/NumberInput'
import { priceFormatter } from '../../../../utils/formatter'
import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'

interface CoffeeCardProps {
  coffee: CoffeeProps
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { handleRegisterCoffeeAmount } = useContext(CheckoutContext)
  const { register, handleSubmit, setValue, getValues } = useForm<CoffeeProps>({
    defaultValues: {
      ...coffee,
    },
  })

  function handleAddCoffeeAmount() {
    const currentAmount = Number(getValues('amount'))
    setValue('amount', currentAmount + 1)
  }

  function handleRemoveCoffeeAmount() {
    const currentAmount = Number(getValues('amount'))
    if (currentAmount > 0) {
      setValue('amount', currentAmount - 1)
    }
  }

  return (
    <CoffeeCardContainer key={coffee.id}>
      <img src={coffee.imgSrc} alt="" draggable="false" />
      <div className="tags">
        {coffee.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <strong>{coffee.name}</strong>
      <p>{coffee.description}</p>
      <CoffeeCardFooter onSubmit={handleSubmit(handleRegisterCoffeeAmount)}>
        <strong>{priceFormatter.format(coffee.price)}</strong>
        <NumberInput
          name={'amount'}
          register={register}
          addValue={handleAddCoffeeAmount}
          subtractValue={handleRemoveCoffeeAmount}
        />
        <ButtonAddToCart type="submit">
          <ShoppingCart size={22} weight={'fill'} />
        </ButtonAddToCart>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
