import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from '../../styles'

import { remover, editar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefas'

type Props = TarefaClass

const Tarefa = ({
  contato: contatoOriginal,
  email: emailOriginal,
  nome: nomeOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [contato, setContato] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (contatoOriginal.length > 0) {
      setContato(contatoOriginal)
    }
  }, [nomeOriginal, emailOriginal, contatoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
  }

  return (
    <S.Card>
      <label htmlFor="nome">Nome completo</label>
      <S.Input
        type="text"
        placeholder="Nome completo"
        onChange={(evento) => setNome(evento.target.value)}
        value={nome}
        id="1"
        disabled={!estaEditando}
      />

      <label htmlFor="email">Email</label>
      <S.Input
        type="email"
        placeholder="Seu Email"
        onChange={(evento) => setEmail(evento.target.value)}
        value={email}
        disabled={!estaEditando}
      />

      <label htmlFor="contato">Contato</label>
      <S.Input
        type="number"
        placeholder="Número de contato"
        onChange={(evento) => setContato(evento.target.value)}
        value={contato}
        disabled={!estaEditando}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaSalvar
              onClick={() => {
                dispatch(editar({ contato, email, nome, id }))
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaSalvar>
            <S.BotaCancelar
              onClick={() => {
                cancelarEdicao
              }}
            >
              Cancelar
            </S.BotaCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
