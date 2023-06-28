import ExpressoTradicional from '../../../../assets/coffee/Type=Expresso.png'
import ExpressoAmericano from '../../../../assets/coffee/Type=Americano.png'
import ExpressoCremoso from '../../../../assets/coffee/Type=Expresso Cremoso.png'
import ExpressoGelado from '../../../../assets/coffee/Type=Café Gelado.png'
import CafeComLeite from '../../../../assets/coffee/Type=Café com Leite.png'
import Latte from '../../../../assets/coffee/Type=Latte.png'
import Cappucino from '../../../../assets/coffee/Type=Capuccino.png'
import Macchiato from '../../../../assets/coffee/Type=Macchiato.png'
import Mocaccino from '../../../../assets/coffee/Type=Mochaccino.png'
import ChocolateQuente from '../../../../assets/coffee/Type=Chocolate Quente.png'
import Cubano from '../../../../assets/coffee/Type=Cubano.png'
import Havaiano from '../../../../assets/coffee/Type=Havaiano.png'
import Arabe from '../../../../assets/coffee/Type=Árabe.png'
import Irlandes from '../../../../assets/coffee/Type=Irlandês.png'

export interface CoffeeProps {
  id: number
  tags: string[]
  name: string
  description: string
  price: number
  imgSrc: string
  amount: number
}

const coffeeList: CoffeeProps[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    tags: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    imgSrc: ExpressoTradicional,
    amount: 0,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    imgSrc: ExpressoAmericano,
    amount: 0,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    tags: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    imgSrc: ExpressoCremoso,
    amount: 0,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    tags: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    imgSrc: ExpressoGelado,
    amount: 0,
  },
  {
    id: 5,
    name: 'Café com Leite',
    tags: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    imgSrc: CafeComLeite,
    amount: 0,
  },
  {
    id: 6,
    name: 'Latte',
    tags: ['tradicional', 'com leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    imgSrc: Latte,
    amount: 0,
  },
  {
    id: 7,
    name: 'Capuccino',
    tags: ['tradicional', 'com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    imgSrc: Cappucino,
    amount: 0,
  },
  {
    id: 8,
    name: 'Macchiato',
    tags: ['tradicional', 'com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    imgSrc: Macchiato,
    amount: 0,
  },
  {
    id: 9,
    name: 'Mocaccino',
    tags: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    imgSrc: Mocaccino,
    amount: 0,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    tags: ['especial', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    imgSrc: ChocolateQuente,
    amount: 0,
  },
  {
    id: 11,
    name: 'Cubano',
    tags: ['especial', 'alcólico', 'gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    imgSrc: Cubano,
    amount: 0,
  },
  {
    id: 12,
    name: 'Havaiano',
    tags: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    imgSrc: Havaiano,
    amount: 0,
  },
  {
    id: 13,
    name: 'Árabe',
    tags: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    imgSrc: Arabe,
    amount: 0,
  },
  {
    id: 14,
    name: 'irlandês',
    tags: ['especial', 'alcólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    imgSrc: Irlandes,
    amount: 0,
  },
]

export { coffeeList }
