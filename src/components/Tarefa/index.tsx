import { useState } from 'react'
import * as S from './styles'

import * as enums from '../../utils/enums/Tarefa'

type Props = {
  titulo: string
  nome: string
  email: string
  contato: number
  prioridade: enums.Prioridade
  status: enums.Status
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
