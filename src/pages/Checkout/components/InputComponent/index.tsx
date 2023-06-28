import { InputFormComponent, InputFormComponentWrapper } from './styles'

interface InputComponentProps {
  size?: 'full' | 'xs' | 'sm' | 'md' | 'large'
  placeholder?: string
}

export function InputComponent({
  placeholder = '',
  size = 'full',
}: InputComponentProps) {
  return (
    <InputFormComponentWrapper $size={size}>
      <InputFormComponent type="text" placeholder={placeholder} />
    </InputFormComponentWrapper>
  )
}
