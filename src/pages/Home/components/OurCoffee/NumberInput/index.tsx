import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  ButtonAddToCart,
  InputButtonControl,
  InputNumberContainer,
  InputNumberWrapper,
} from './styles'

export function NumberInput() {
  return (
    <InputNumberContainer>
      <InputNumberWrapper>
        <InputButtonControl variant="minus">
          <Minus size={14} weight={'fill'} />
        </InputButtonControl>
        <input min={0} type="number" />
        <InputButtonControl variant="plus">
          <Plus size={14} weight={'fill'} />
        </InputButtonControl>
      </InputNumberWrapper>

      <ButtonAddToCart>
        <ShoppingCart size={22} weight={'fill'} />
      </ButtonAddToCart>
    </InputNumberContainer>
  )
}
