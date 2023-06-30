import { Minus, Plus } from 'phosphor-react'
import { InputButtonControl, InputNumberWrapper } from './styles'
import { UseFormRegister } from 'react-hook-form'

interface NumberInputProps {
  name: string
  register: UseFormRegister<any>
  addValue: () => void
  subtractValue: () => void
  size?: string
}

export function NumberInput({
  name,
  register,
  addValue,
  subtractValue,
  size,
}: NumberInputProps) {
  return (
    <InputNumberWrapper $size={size}>
      <InputButtonControl type="button" onClick={subtractValue}>
        <Minus size={14} weight={'fill'} />
      </InputButtonControl>
      <input
        type="number"
        {...register(name, {
          max: 99,
          min: 1,
        })}
      />
      <InputButtonControl type="button" onClick={addValue}>
        <Plus size={14} weight={'fill'} />
      </InputButtonControl>
    </InputNumberWrapper>
  )
}
