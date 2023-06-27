import {
  HeaderContainer,
  HeaderContent,
  InfoContainer,
  Location,
} from './styles'
import { MapPin } from 'phosphor-react'
import CoffeeDeliveryLogo from '../../assets/logo.svg'
import { ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export function Header() {
  const [itemsOnCart] = useState(3)

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={CoffeeDeliveryLogo} alt="" />

        <InfoContainer>
          <Location>
            <MapPin size={22} weight={'fill'} />
            <span>São José dos Campos, SP</span>
          </Location>
          <NavLink to={'/checkout'}>
            {itemsOnCart > 0 && <strong>{itemsOnCart}</strong>}
            <ShoppingCart size={22} weight={'fill'} />
          </NavLink>
        </InfoContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
