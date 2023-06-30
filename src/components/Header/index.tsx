import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  HeaderContainer,
  HeaderContent,
  InfoContainer,
  Location,
} from './styles'
import CoffeeDeliveryLogo from '../../assets/logo.svg'
import { CheckoutContext } from '../../contexts/CheckoutContext'

export function Header() {
  const { coffeeOrderList } = useContext(CheckoutContext)

  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to={'/'}>
          <img src={CoffeeDeliveryLogo} alt="" />
        </NavLink>

        <InfoContainer>
          <Location>
            <MapPin size={22} weight={'fill'} />
            <span>São José dos Campos, SP</span>
          </Location>
          <NavLink to={'/checkout'}>
            {coffeeOrderList.length > 0 && (
              <strong>{coffeeOrderList.length}</strong>
            )}
            <ShoppingCart size={22} weight={'fill'} />
          </NavLink>
        </InfoContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
