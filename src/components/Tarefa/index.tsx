import { useState } from 'react'
import * as S from './styles'

//type Props ante da const
// passar a propriedade no componentes List

type Props = {
  nome: string
  email: string
  contato: number
  id: number
}

// atraves da {} para fazer a desetruturacao
const Tarefa = ({ nome, email, contato }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  // setEstaEditando na funcao do botao editar
  return (
    <S.Card>
      <S.Tag>{nome}</S.Tag>
      <S.Tag>{email}</S.Tag>
      <S.Tag>{contato}</S.Tag>
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
            <S.BotaCancelaRemover>Remover</S.BotaCancelaRemover>
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
