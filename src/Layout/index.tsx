import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { AppContext } from '../provider/AppProvider'
import { ContainerLayout } from './styles'

export function Layout() {
  const { backGround } = useContext(AppContext)
  return (
    <ContainerLayout background={backGround}>
      <Header />
      <Outlet />
      <Footer />
    </ContainerLayout>
  )
}
