import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CurrencyDollar, MapPinLine, Trash } from 'phosphor-react'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
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
import { priceFormatter } from '../../utils/formatter'
import { NumberInput } from '../../components/NumberInput'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// const cepRegEx = /\d[0-9]\d{8}/

const newCheckoutValidationSchema = zod.object({
  address: zod.object({
    cep: zod.string().length(8, { message: 'O CEP deve ter 8 caracteres' }),
    rua: zod.string().min(1, { message: 'Campo obrigatório' }),
    numero: zod.string().min(1, { message: 'Campo obrigatório..' }),
    complemento: zod.string().optional(),
    bairro: zod.string().min(1, { message: 'Campo obrigatório.' }),
    cidade: zod.string().min(1, { message: 'Campo obrigatório.' }),
    uf: zod.string().min(2, { message: 'Campo obrigatório.' }).max(2, {
      message: 'UF inválido.',
    }),
    paymentMethod: zod.enum(['credito', 'debito', 'dinheiro']),
  }),
  orderList: zod
    .object({
      id: zod.number(),
      amount: zod.number(),
      description: zod.string(),
      imgSrc: zod.string(),
      name: zod.string(),
      price: zod.number(),
      tags: zod.string().array(),
    })
    .array(),
  itemsTotal: zod.number(),
  orderTotal: zod.number(),
})

export type CheckoutInfoProps = zod.infer<typeof newCheckoutValidationSchema>

export function Checkout() {
  const [deliveryCost] = useState(6)
  const { coffeeOrderList, handleRemoveCoffeeFromCheckout, resetOrderList } =
    useContext(CheckoutContext)
  const checkoutForm = useForm<CheckoutInfoProps>({
    resolver: zodResolver(newCheckoutValidationSchema),
    defaultValues: {
      address: {
        rua: '',
        cep: '',
        bairro: '',
        cidade: '',
        complemento: '',
        numero: '',
        paymentMethod: 'credito',
        uf: '',
      },
      itemsTotal: 0,
      orderTotal: 0,
      orderList: coffeeOrderList,
    },
  })
  const {
    watch,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
    handleSubmit,
    control,
    register,
  } = checkoutForm

  const { fields, remove } = useFieldArray({
    name: 'orderList',
    control,
  })

  const orderList = watch('orderList')
  const itemsTotal = watch('itemsTotal')
  const orderTotal = watch('orderTotal')

  const navigate = useNavigate()

  // function handleSubmitOrderCheckout() {
  function handleSubmitOrderCheckout(data: CheckoutInfoProps) {
    if (orderList.length > 0) {
      saveUserAddressIntoStorage()
      setTimeout(() => {
        resetOrderList()
        navigate('/success')
      }, 1000)
    }
  }

  function updateCheckoutTotal() {
    const totalCheckoutOrder = orderList.reduce(
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
    setValue('itemsTotal', totalCheckoutOrder.itemsTotal)
    setValue('orderTotal', totalCheckoutOrder.orderTotal)
  }

  // Local storage manipulation
  async function getUserAddressFromStorage() {
    const address = await JSON.parse(
      localStorage?.getItem('COFFEE_SHOP:address')!,
    )
    if (!address) {
      console.warn('Warning: Empty user info in local storage')
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

  useEffect(() => {
    updateCheckoutTotal()
  }, [orderList])

  return (
    <CheckoutContainer>
      <CheckoutForm onSubmit={handleSubmit(handleSubmitOrderCheckout)}>
        <FormProvider {...checkoutForm}>
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
                  errorMessage={errors.address?.cep?.message}
                />
                <InputComponent
                  name="address.rua"
                  placeholder="Rua"
                  size="full"
                  required
                  errorMessage={errors.address?.rua?.message}
                />
                <div>
                  <InputComponent
                    name="address.numero"
                    placeholder="Número"
                    size="sm"
                    required
                    errorMessage={errors.address?.numero?.message}
                  />
                  <InputComponent
                    name="address.complemento"
                    placeholder="Complemento"
                  />
                </div>
                <div>
                  <InputComponent
                    name="address.bairro"
                    placeholder="Bairro"
                    size="sm"
                    required
                    errorMessage={errors.address?.bairro?.message}
                  />
                  <InputComponent
                    name="address.cidade"
                    placeholder="Cidade"
                    size="md"
                    required
                    errorMessage={errors.address?.cidade?.message}
                  />
                  <InputComponent
                    name="address.uf"
                    placeholder="UF"
                    size="xs"
                    required
                    errorMessage={errors.address?.uf?.message}
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
                <RadioComponent />
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
                  <span>R$ {priceFormatter.format(itemsTotal)}</span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>R$ {priceFormatter.format(deliveryCost)}</span>
                </div>
                <div>
                  <strong>Total</strong>
                  <strong>R$ {priceFormatter.format(orderTotal)}</strong>
                </div>
              </CheckoutResult>
              <ButtonConfirmOrder type="submit">
                {isSubmitting ? 'Enviando...' : 'Confirmar pedido'}
              </ButtonConfirmOrder>
            </SelectedCoffeeContent>
          </SelectedCoffeeSection>
        </FormProvider>
      </CheckoutForm>
    </CheckoutContainer>
  )
}
