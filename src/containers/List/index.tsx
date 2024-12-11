import Tarefa from '../../components/Tarefa'

const tarefas = [
  {
    nome: 'teste',
    email: 'teste2teste',
    contato: 16992523252,
    id: 1
  },
  {
    nome: 'teste1',
    email: 'teste1@teste',
    contato: 16992523252,
    id: 1
  },
  {
    nome: 'teste2',
    email: 'teste@teste2',
    contato: 16992523252,
    id: 3
  }
]

const List = () => (
  <main>
    <p>tarefas</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.id}>
          <Tarefa nome={t.nome} email={t.email} contato={t.contato} id={t.id} />
        </li>
      ))}
    </ul>
  </main>
)

export default List
