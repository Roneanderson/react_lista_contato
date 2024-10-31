import * as S from './styles'

const Tarefa = () => (
  <S.Card>
    <S.Titulo>nome da Tarefa</S.Titulo>
    <S.Paragrafo>nome:</S.Paragrafo>
    <S.Paragrafo>contato:</S.Paragrafo>
    <S.Paragrafo>email:</S.Paragrafo>
    <S.Tag>importante</S.Tag>
    <S.Tag>pendente</S.Tag>
    <S.Descricao />
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)

export default Tarefa
