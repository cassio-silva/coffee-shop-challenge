import { NumberInput } from './NumberInput'
import { coffeeList } from './coffeData'
import { priceFormatter } from '../../../../utils/formatter'
import {
  CoffeeCard,
  CoffeeCardFooter,
  CoffeeContainer,
  CoffeeContent,
} from './styles'

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
              <NumberInput amount={coffee.amount} id={coffee.id} />
            </CoffeeCardFooter>
          </CoffeeCard>
        ))}
      </CoffeeContent>
    </CoffeeContainer>
  )
}
