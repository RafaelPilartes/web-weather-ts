import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { ContainerLayout } from './styles'

export function Layout() {
  return (
    <ContainerLayout>
      <Header />
      <Outlet />
      <Footer />
    </ContainerLayout>
  )
}
