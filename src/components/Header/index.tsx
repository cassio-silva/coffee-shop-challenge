import { useContext, useEffect, useState } from 'react'
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

interface UserInfo {
  rua: string
  uf: string
}

export function Header() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const { coffeeOrderList } = useContext(CheckoutContext)

  async function getUserInfo() {
    const localStorageUserInfo = await JSON.parse(
      localStorage.getItem('COFFEE_SHOP:address') as string,
    )
    if (localStorageUserInfo) {
      setUserInfo(localStorageUserInfo)
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to={'/'}>
          <img src={CoffeeDeliveryLogo} alt="" />
        </NavLink>

        <InfoContainer>
          {userInfo?.rua && (
            <Location>
              <MapPin size={22} weight={'fill'} />
              <span>
                {userInfo?.rua}, {userInfo?.uf.toLocaleUpperCase()}
              </span>
            </Location>
          )}
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
