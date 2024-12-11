import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

//importando a função remover
import { remover } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({ contato, email, id, nome }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Tag>contato{contato}</S.Tag>
      <S.Tag>email{email}</S.Tag>
      <S.Tag>id{id}</S.Tag>
      <S.Tag>nome{nome}</S.Tag>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaSalvar>Salvar</S.BotaSalvar>
            <S.BotaCancelaRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaCancelaRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaCancelaRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaCancelaRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

/* ternario
{condicao ? tratamento verdadeiro : excecao}

ternario com if
if (condicao) {
tratamento verdadeiro
} else {
excecao
}

exemplo variavel idade

{idade => 18 ? 'é maior de idade' : 'é menor de idade'}
*/

export default Tarefa
