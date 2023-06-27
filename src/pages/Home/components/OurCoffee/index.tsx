import { coffeeList } from './coffeData'
import {
  CoffeeCard,
  CoffeeCardFooter,
  CoffeeContainer,
  CoffeeContent,
} from './styles'
import { priceFormatter } from '../../../../utils/formatter'
import { NumberInput } from './NumberInput'

export function OurCoffeeSection() {
  return (
    <CoffeeContainer>
      <h1>Nossos cafés</h1>

      <CoffeeContent>
        {coffeeList.map((coffee) => (
          <CoffeeCard key={coffee.id}>
            <img src={coffee.imgSrc} alt="" draggable="false" />
            <div className="tags">
              {coffee.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
            <strong>{coffee.name}</strong>
            <p>{coffee.description}</p>
            <CoffeeCardFooter>
              <strong>{priceFormatter.format(coffee.price)}</strong>
              <NumberInput />
            </CoffeeCardFooter>
          </CoffeeCard>
        ))}
      </CoffeeContent>
    </CoffeeContainer>
  )
}
