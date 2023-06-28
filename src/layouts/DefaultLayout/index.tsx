import { Header } from '../../components/Header'
import { MainContainer } from './styles'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  )
}
