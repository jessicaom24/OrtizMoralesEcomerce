
import ItemCount from './components/itemCount'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import './index.css'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer saludo={'Bienvenidos!'}></ItemListContainer>
    </>
  )
}

export default App
