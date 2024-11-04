import { Provider } from 'react-redux'
import EstiloGlobal, { Container } from './styles/styles'
import Lateral from './containers/Lateral'
import ListaDeTarefas from './containers/ListaDeTarefas'

import store from './store'

//Provider faz conexao entre react e o redux proviider recebe store = store
function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Lateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
