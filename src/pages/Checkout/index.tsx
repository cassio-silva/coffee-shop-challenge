import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CurrencyDollar, MapPinLine, Trash } from 'phosphor-react'
import { useFieldArray, useForm } from 'react-hook-form'
import { InputComponent } from './components/InputComponent'
import {
  AddressContainer,
  AddressContent,
  ButtonConfirmOrder,
  CheckoutContainer,
  CheckoutForm,
  CheckoutResult,
  FormContent,
  FormHeader,
  PaymentContainer,
  SelectedCoffeeCard,
  SelectedCoffeeCardContent,
  SelectedCoffeeContent,
  SelectedCoffeeSection,
  Separator,
} from './styles'
import { RadioComponent } from './components/RadioComponent'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import { CoffeeProps } from '../Home/components/OurCoffee/coffeeData'
import { priceFormatter } from '../../utils/formatter'
import { NumberInput } from '../../components/NumberInput'

interface InformationProps {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  paymentMethod: 'credito' | 'debito' | 'dinheiro'
}

interface OrderProps {
  address: InformationProps
  orderList: CoffeeProps[]
  itemsTotal: number
  orderTotal: number
}

export function Checkout() {
  const [deliveryCost] = useState(6)
  const { coffeeOrderList, handleRemoveCoffeeFromCheckout, resetOrderList } =
    useContext(CheckoutContext)
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    watch,
    formState: { isSubmitting },
  } = useForm<OrderProps>({
    defaultValues: {
      address: {
        cep: '',
        bairro: '',
        cidade: '',
        complemento: '',
        numero: '',
        rua: '',
        uf: '',
        paymentMethod: 'credito',
      },
      itemsTotal: 0,
      orderTotal: 0,
      orderList: coffeeOrderList,
    },
  })
  const { fields, remove } = useFieldArray({
    name: 'orderList',
    control,
  })
  const navigate = useNavigate()

  // function handleSubmitOrderCheckout(data: OrderProps) {
  function handleSubmitOrderCheckout() {
    saveUserAddressIntoStorage()
    if (!isSubmitting && coffeeOrderList.length > 0) {
      resetOrderList()
      navigate('/success')
    }
  }

  function updateCheckoutTotal() {
    const totalCheckoutOrder = watch('orderList').reduce(
      (acc, coffee) => {
        acc.itemsTotal += coffee.amount * coffee.price
        acc.orderTotal = acc.itemsTotal + deliveryCost
        return acc
      },
      {
        itemsTotal: 0,
        orderTotal: 0,
      },
    )
    console.log(totalCheckoutOrder)
    setValue('itemsTotal', totalCheckoutOrder.itemsTotal)
    setValue('orderTotal', totalCheckoutOrder.orderTotal)
  }

  // Local storage manipulation
  async function getUserAddressFromStorage() {
    const address = await JSON.parse(
      localStorage?.getItem('COFFEE_SHOP:address')!,
    )
    if (!address) {
      return
    }
    setValue('address', address)
  }

  function saveUserAddressIntoStorage() {
    const address = getValues('address')
    localStorage.setItem('COFFEE_SHOP:address', JSON.stringify(address))
  }

  // Button control handlers
  function handleRemoveItem(index: number, coffeeName: string) {
    handleRemoveCoffeeFromCheckout(coffeeName)
    remove(index)
    updateCheckoutTotal()
  }

  function handleAddAmount(name: string) {
    const newValue = Number(getValues(name as any))
    setValue(name as any, newValue + 1)
    updateCheckoutTotal()
  }

  function handleSubtractAmount(name: string) {
    const newValue = Number(getValues(name as any))
    if (newValue > 1) {
      setValue(name as any, newValue - 1)
      updateCheckoutTotal()
    }
  }

  useEffect(() => {
    getUserAddressFromStorage()
    updateCheckoutTotal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <CheckoutContainer>
      <CheckoutForm onSubmit={handleSubmit(handleSubmitOrderCheckout)}>
        <AddressContainer>
          <h2>Complete seu pedido</h2>
          <AddressContent>
            <FormHeader>
              <MapPinLine size={22} color={'#C47F17'} />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FormHeader>
            <FormContent>
              <InputComponent
                name="address.cep"
                placeholder="CEP"
                size="sm"
                required
                register={register}
              />
              <InputComponent
                name="address.rua"
                placeholder="Rua"
                size="full"
                required
                register={register}
              />
              <div>
                <InputComponent
                  name="address.numero"
                  placeholder="Número"
                  size="sm"
                  required
                  register={register}
                />
                <InputComponent
                  name="address.complemento"
                  placeholder="Complemento"
                  register={register}
                />
              </div>
              <div>
                <InputComponent
                  name="address.bairro"
                  placeholder="Bairro"
                  size="sm"
                  required
                  register={register}
                />
                <InputComponent
                  name="address.cidade"
                  placeholder="Cidade"
                  size="md"
                  required
                  register={register}
                />
                <InputComponent
                  name="address.uf"
                  placeholder="UF"
                  size="xs"
                  required
                  register={register}
                />
              </div>
            </FormContent>
          </AddressContent>
          <PaymentContainer>
            <FormHeader>
              <CurrencyDollar size={22} color={'#8047F8'} />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </FormHeader>
            <div>
              <RadioComponent
                name="address.paymentMethod"
                register={register}
                setValue={setValue}
              />
            </div>
          </PaymentContainer>
        </AddressContainer>
        <SelectedCoffeeSection>
          <h2>Cafés selecionados</h2>
          <SelectedCoffeeContent>
            <div className="coffeeWrapper">
              {fields?.map((coffeeItem, index) => (
                <React.Fragment key={coffeeItem.id}>
                  <SelectedCoffeeCard>
                    <img src={coffeeItem.imgSrc} alt={coffeeItem.name} />
                    <SelectedCoffeeCardContent>
                      <span>{coffeeItem.name}</span>
                      <div>
                        <NumberInput
                          name={`orderList.${index}.amount`}
                          addValue={() =>
                            handleAddAmount(`orderList.${index}.amount`)
                          }
                          subtractValue={() =>
                            handleSubtractAmount(`orderList.${index}.amount`)
                          }
                          register={register}
                        />
                        <button
                          className="remove"
                          type="button"
                          onClick={() =>
                            handleRemoveItem(index, coffeeItem.name)
                          }
                        >
                          <Trash size={16} />
                          remover
                        </button>
                      </div>
                    </SelectedCoffeeCardContent>
                    <strong>
                      R$ {priceFormatter.format(coffeeItem.price)}
                    </strong>
                  </SelectedCoffeeCard>
                  <Separator />
                </React.Fragment>
              ))}
            </div>
            <CheckoutResult>
              <div>
                <span>Total de itens</span>
                <span>R$ {priceFormatter.format(watch('itemsTotal'))}</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ {priceFormatter.format(deliveryCost)}</span>
              </div>
              <div>
                <strong>Total</strong>
                <strong>R$ {priceFormatter.format(watch('orderTotal'))}</strong>
              </div>
            </CheckoutResult>
            <ButtonConfirmOrder type="submit">
              {isSubmitting ? 'Enviando...' : 'Confirmar pedido'}
            </ButtonConfirmOrder>
          </SelectedCoffeeContent>
        </SelectedCoffeeSection>
      </CheckoutForm>
    </CheckoutContainer>
  )
}
