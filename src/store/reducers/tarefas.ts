import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

type TarefaState = {
  itens: Tarefa[]
}

const initialState: TarefaState = {
  itens: [
    {
      titulo: 'Estudar React',
      nome: 'José Santos',
      contato: 16992203030,
      email: 'JoseSantos@teste',
      id: 1
    },
    {
      titulo: 'Estudar typeScript',
      nome: 'Roberto Silva',
      contato: 16992204587,
      email: 'RobertoSilva@teste',
      id: 2
    },
    {
      titulo: 'Estudar java',
      nome: 'João Silva',
      contato: 1699220256,
      email: 'joaoSilva@teste',
      id: 3
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export default tarefasSlice.reducer
