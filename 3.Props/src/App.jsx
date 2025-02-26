import './App.css'
import Product from './Product'
import Container from './Container'

function App() {
  const productName = "Buzdolabı"
  let price = 15000
  return (
    <>
      <div>
        Betül
        <Product productName = "Ayakkabı" price = {3200}/>
        <Product productName = "Pantolon" price = {950}/>
        <Product productName = {productName} price = {price}/>
      </div>
      <br />
      <br />
      <div>
        <Container>
          <Product  productName = "Telefon" price = {20500}/>
        </Container>
      </div>
    </>
  )
}

export default App
