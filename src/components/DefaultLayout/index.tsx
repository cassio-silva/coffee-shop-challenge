import { ReactNode } from 'react'
import { Header } from '../Header'
import { MainContainer } from './styles'

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
    </>
  )
}
