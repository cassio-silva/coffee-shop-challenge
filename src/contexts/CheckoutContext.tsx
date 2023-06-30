import { ReactNode, createContext, useState } from 'react'
import { CoffeeProps } from '../pages/Home/components/OurCoffee/coffeeData'

interface CheckoutContextProps {
  coffeeOrderList: CoffeeProps[]
  handleRegisterCoffeeAmount: (data: CoffeeProps) => void
  handleRemoveCoffeeFromCheckout: (coffeeName: string) => void
  resetOrderList: () => void
}

export const CheckoutContext = createContext({} as CheckoutContextProps)

interface CheckoutProviderProps {
  children: ReactNode
}

export function CheckoutProvider({ children }: CheckoutProviderProps) {
  const [coffeeOrderList, setCoffeeOrderList] = useState<CoffeeProps[]>([])

  function handleRegisterCoffeeAmount(data: CoffeeProps) {
    if (coffeeOrderList.find((checkout) => checkout.id === data.id)) {
      const newCheckoutList = coffeeOrderList.filter(
        (checkout) => checkout.id !== data.id,
      )
      setCoffeeOrderList([...newCheckoutList, data])
    } else {
      setCoffeeOrderList((state) => [...state, data])
    }
  }

  function handleRemoveCoffeeFromCheckout(coffeeName: string) {
    const newCoffeeList = coffeeOrderList.filter(
      (coffee) => coffee.name !== coffeeName,
    )
    setCoffeeOrderList(newCoffeeList)
  }

  function resetOrderList() {
    setCoffeeOrderList([])
  }

  return (
    <CheckoutContext.Provider
      value={{
        coffeeOrderList,
        handleRegisterCoffeeAmount,
        handleRemoveCoffeeFromCheckout,
        resetOrderList,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
