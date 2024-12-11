import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'

import { RootReducer } from '../../store'

const List = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)

  return (
    <main>
      <p>tarefas</p>
      <ul>
        {tarefas.itens.map((t) => (
          <li key={t.nome}>
            <Tarefa
              id={t.id}
              nome={t.nome}
              contato={t.contato}
              email={t.email}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}
export default List
