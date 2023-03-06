import React from 'react'
import NavbarComponent from './components/NavbarComponent'
import { Container } from 'react-bootstrap'
import CartProvider from './CartContext'

const App = () => {
  return (
    <CartProvider>
    <Container>
      <NavbarComponent />
    </Container>
    </CartProvider>
  )
}

export default App