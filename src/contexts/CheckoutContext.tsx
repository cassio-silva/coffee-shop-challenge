import { ReactNode, createContext, useEffect, useState } from 'react'
import {
  CoffeeProps,
  coffeeList,
} from '../pages/Home/components/OurCoffee/coffeData'

export interface CheckoutListProps {
  id: number
  amount: number
  total: number
}

interface CheckoutContextProps {
  coffeeList: CoffeeProps[]
  checkoutList: CheckoutListProps[]
  handleRegisterCoffeeAmount: (data: CheckoutListProps) => void
}

export const CheckoutContext = createContext({} as CheckoutContextProps)

interface CheckoutProviderProps {
  children: ReactNode
}

export function CheckoutProvider({ children }: CheckoutProviderProps) {
  const [coffeeList, setCoffeeList] = useState<CoffeeProps[]>([])
  const [checkoutList, setCheckoutList] = useState<CheckoutListProps[]>([])

  function handleRegisterCoffeeAmount(data: CheckoutListProps) {
    if (checkoutList.find((checkout) => checkout.id === data.id)) {
      const newCheckoutList = checkoutList.filter(
        (checkout) => checkout.id !== data.id,
      )
      setCheckoutList([...newCheckoutList, data])
    } else {
      setCheckoutList((state) => [...state, data])
    }
  }

  useEffect(() => {
    console.log(coffeeList)
  }, [coffeeList])

  return (
    <CheckoutContext.Provider
      value={{
        checkoutList,
        coffeeList,
        handleRegisterCoffeeAmount,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
