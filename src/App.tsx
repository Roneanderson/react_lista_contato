import { Provider } from 'react-redux'
import Formulario from './containers/Formulario'
import List from './containers/List'
import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Formulario />
        <List />
      </Container>
    </Provider>
  )
}

export default App
