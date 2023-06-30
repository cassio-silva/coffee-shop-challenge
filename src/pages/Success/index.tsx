import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import DeliveryImage from '../../assets/delivery.png'
import {
  SuccessContainer,
  SuccessContent,
  SuccessImageWrapper,
  SuccessInfo,
  SuccessInfoItem,
} from './styles'
import { useEffect, useState } from 'react'

interface AddressInformationProps {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  paymentMethod: 'credito' | 'debito' | 'dinheiro'
}

export function Success() {
  const [addressInfo, setAddressInfo] = useState<AddressInformationProps>()

  async function getCheckoutInfo() {
    const addressLocalStorageString = JSON.parse(
      localStorage.getItem('COFFEE_SHOP:address') as string,
    )
    if (addressLocalStorageString) {
      setAddressInfo(addressLocalStorageString)
    }
  }

  useEffect(() => {
    getCheckoutInfo()
  }, [])

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>
      <SuccessInfo>
        <SuccessContent>
          <SuccessInfoItem variant="purple">
            <MapPin size={28} weight={'fill'} />
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {addressInfo?.rua}, {addressInfo?.numero}
                </strong>
              </p>
              <p>
                {addressInfo?.bairro} - {addressInfo?.cidade},{' '}
                {addressInfo?.uf.toLocaleUpperCase()}
              </p>
            </div>
          </SuccessInfoItem>
          <SuccessInfoItem variant="yellow">
            <Timer size={28} weight={'fill'} />
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </SuccessInfoItem>
          <SuccessInfoItem variant="yellow-dark">
            <CurrencyDollar size={28} weight={'fill'} />
            <div>
              <p>Pagamento na entrega</p>
              <strong>
                {addressInfo?.paymentMethod === 'credito' &&
                  `Cartão de Crédito`}
                {addressInfo?.paymentMethod === 'debito' && `Cartão de Débito`}
                {addressInfo?.paymentMethod === 'dinheiro' && `Dinheiro`}
              </strong>
            </div>
          </SuccessInfoItem>
        </SuccessContent>
        <SuccessImageWrapper>
          <img src={DeliveryImage} alt="" />
        </SuccessImageWrapper>
      </SuccessInfo>
    </SuccessContainer>
  )
}
