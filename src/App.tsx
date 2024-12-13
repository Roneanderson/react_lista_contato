import { Provider } from 'react-redux'
import Formulario from './containers/Formulario'
import store from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Formulario />
      </Provider>
    </>
  )
}

export default App
