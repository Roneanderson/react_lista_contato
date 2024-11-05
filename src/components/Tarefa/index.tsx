import { useState } from 'react' //dependencia externa
import { useDispatch } from 'react-redux' // dependencia externa

import * as S from './styles'

import { remover } from '../../store/reducers/tarefas'

import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({
  contato,
  descricao,
  email,
  status,
  titulo,
  nome,
  prioridade,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Paragrafo>
        nome: <S.LinkCard>{nome}</S.LinkCard>
      </S.Paragrafo>
      <S.Paragrafo>
        contato:<S.LinkCard> {contato}</S.LinkCard>
      </S.Paragrafo>
      <S.Paragrafo>
        email: <S.LinkCard> {email}</S.LinkCard>
      </S.Paragrafo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa

//{condicao ? tratamento verdadeiro : excecao}
// if (condicao) {
//tratamento verdadeiro
//} else {
//excecao
//}
// {idade >= 18? 'é maior de idade : 'e menor de idade}
