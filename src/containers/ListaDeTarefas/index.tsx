import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const ListaDeTarefas = () => (
  <Container>
    <p>
      2 tarefas marcada como: &quot;categoria&ldquo; e &quot;categoria&ldquo;
    </p>
    <li>
      <Tarefa />
    </li>
    <li>
      <Tarefa />
    </li>
    <li>
      <Tarefa />
    </li>
    <li>
      <Tarefa />
    </li>
    <li>
      <Tarefa />
    </li>
    <li>
      <Tarefa />
    </li>
  </Container>
)

export default ListaDeTarefas
