import { useFormContext } from 'react-hook-form'
import { InputFormComponent, InputFormComponentWrapper } from './styles'
import { CheckoutInfoProps } from '../..'

interface InputComponentProps {
  size?: 'full' | 'xs' | 'sm' | 'md' | 'large'
  placeholder?: string
  required?: boolean
  name: string
  errorMessage?: string
}

export function InputComponent({
  placeholder = '',
  size = 'full',
  required,
  name,
  errorMessage,
}: InputComponentProps) {
  const { register } = useFormContext<CheckoutInfoProps>()

  return (
    <InputFormComponentWrapper $size={size}>
      <InputFormComponent
        type="text"
        placeholder={errorMessage || placeholder}
        $isInvalid={Boolean(errorMessage)}
        {...register(name as any)}
      />
      {!required && <span>Opcional</span>}
    </InputFormComponentWrapper>
  )
}
