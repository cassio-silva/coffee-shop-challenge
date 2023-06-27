import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import IntroImage from '../../../../assets/coffee/coffee-intro.png'
import {
  IntroContainer,
  IntroFirstColumn,
  IntroItem,
  IntroSecondColumn,
  ItemsContainer,
} from './styles'

export function IntroSection() {
  return (
    <IntroContainer>
      <IntroFirstColumn>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <ItemsContainer>
          <IntroItem variant="yellow-dark">
            <div>
              <ShoppingCart size={16} weight={'fill'} />
            </div>
            <span>Compra simples e segura</span>
          </IntroItem>
          <IntroItem variant="base-text">
            <div>
              <Package size={16} weight={'fill'} />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </IntroItem>
          <IntroItem variant="yellow">
            <div>
              <Timer size={16} weight={'fill'} />
            </div>
            <span>Entrega rápida e rastreada</span>
          </IntroItem>
          <IntroItem variant="purple">
            <div>
              <Coffee size={16} weight={'fill'} />
            </div>
            <span>O café chega fresquinho até você</span>
          </IntroItem>
        </ItemsContainer>
      </IntroFirstColumn>

      <IntroSecondColumn>
        <img src={IntroImage} alt="" />
      </IntroSecondColumn>
    </IntroContainer>
  )
}
