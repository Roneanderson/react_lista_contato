import { Form } from 'react-router-dom'
import * as S from '../../styles'

const Formulário = () => (
  <S.Container>
    <Form>
      <h1>Formulário de Cadastro</h1>
      <S.Label htmlFor="nome">Nome</S.Label>
      <S.Input id="nome" name="nome" type="text" />

      <S.Label htmlFor="email">email</S.Label>
      <S.Input id="email" name="email" type="email" />

      <S.Label htmlFor="contato">Contato</S.Label>
      <S.Input id="contato" name="contato" type="number" />
      <S.Botao type="submit">Cadastrar</S.Botao>
      <S.Botao type="submit">Voltar a pagina inicial</S.Botao>
    </Form>
  </S.Container>
)

export default Formulário
