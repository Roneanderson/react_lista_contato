import {} from 'react-redux'
import EstiloGlobal, { Container } from './styles/styles'
import Lateral from './containers/Lateral'
import ListaDeTarefas from './containers/ListaDeTarefas'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Lateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
