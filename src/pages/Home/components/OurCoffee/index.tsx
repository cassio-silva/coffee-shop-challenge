import { CoffeeCard } from '../CoffeeCard'
import { coffeeList } from './coffeeData'
import { CoffeeContainer, CoffeeContent } from './styles'

export function OurCoffeeSection() {
  return (
    <CoffeeContainer>
      <h1>Nossos cafés</h1>

      <CoffeeContent>
        {coffeeList.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeContent>
    </CoffeeContainer>
  )
}
