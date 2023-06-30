import { UseFormRegister } from 'react-hook-form'
import { InputFormComponent, InputFormComponentWrapper } from './styles'

interface InputComponentProps {
  size?: 'full' | 'xs' | 'sm' | 'md' | 'large'
  placeholder?: string
  name: string
  required?: boolean
  register: UseFormRegister<any>
}

export function InputComponent({
  placeholder = '',
  size = 'full',
  name,
  required,
  register,
}: InputComponentProps) {
  return (
    <InputFormComponentWrapper $size={size}>
      <InputFormComponent
        type="text"
        placeholder={placeholder}
        {...register(name, {
          required,
        })}
      />
    </InputFormComponentWrapper>
  )
}
