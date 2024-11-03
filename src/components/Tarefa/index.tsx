import { useState } from 'react'
import * as S from './styles'

type Props = {
  titulo: string
  nome: string
  email: string
  contato: number
  prioridade: string
  status: string
  descricao: string
}

const Tarefa = ({
  contato,
  descricao,
  email,
  status,
  titulo,
  nome,
  prioridade
}: Props) => {
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
      <S.Tag prioridade={prioridade}>{prioridade}</S.Tag>
      <S.Tag status={status}>{status}</S.Tag>
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
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
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
