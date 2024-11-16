import { ChangeEvent, useEffect, useState } from 'react' //dependencia externa
import { useDispatch } from 'react-redux' // dependencia externa

import * as S from './styles'

import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'

import TarefaClass from '../../models/Tarefa'
import { Botao, BotaoSalvar } from '../../styles'
import * as enums from '../../utils/enums/Tarefa'

type Props = TarefaClass

const Tarefa = ({
  contato,
  descricao: descricaoOriginal,
  email,
  status,
  titulo,
  nome,
  prioridade,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    console.log(evento.target.checked)
    dispatch(alteraStatus({ id, finalizado: evento.target.checked }))
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusTarefa}
        />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
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
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    contato,
                    descricao: descricaoOriginal,
                    email,
                    status,
                    titulo,
                    nome,
                    prioridade,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
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

//componentes controlados [nome, setNome] = useState('')
//componentes uncontrolled input onChange={e => setnome(e.value.target)}
