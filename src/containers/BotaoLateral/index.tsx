import { useNavigate } from 'react-router-dom'
import { Botao } from '../../styles'
const BotaoLateral = () => {
  const navigate = useNavigate()

  return <Botao onClick={() => navigate('/')}>Voltar a lista de tarefas</Botao>
}
export default BotaoLateral
