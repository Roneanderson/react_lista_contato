import BotaoAdicionar from '../../components/BotaoAdicionar'
import Lateral from '../../containers/Lateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <Lateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
