import { DefaultLayout } from '../../components/DefaultLayout'
import { IntroSection } from './components/IntroSection'
import { OurCoffeeSection } from './components/OurCoffee'

export function Home() {
  return (
    <DefaultLayout>
      <IntroSection />
      <OurCoffeeSection />
    </DefaultLayout>
  )
}
