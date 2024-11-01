import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Lista de estudo',
    nome: 'João Silva',
    contato: 16992202568,
    email: 'joaoSilva@teste',
    descricao: 'ver aula 3 da EBAC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Lista de tabela ',
    nome: 'Roberto Silva',
    contato: 16992204587,
    email: 'RobertoSilva@teste',
    descricao: 'type-Script EBAC',
    prioridade: 'urgente',
    status: 'pendente'
  },
  {
    titulo: 'Cronograma de estudo',
    nome: 'José Santos',
    contato: 16992203030,
    email: 'JoseSantos@teste',
    descricao: 'lista de react da EBAC',
    prioridade: 'urgente',
    status: 'concluida'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>
      2 tarefas marcada como: &quot;categoria&ldquo; e &quot;categoria&ldquo;
    </p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            titulo={t.titulo}
            nome={t.nome}
            email={t.email}
            contato={t.contato}
            descricao={t.descricao}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
