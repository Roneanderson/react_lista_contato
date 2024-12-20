import { configureStore } from '@reduxjs/toolkit'

import tarefasRedurcers from './reducers/tarefas'

const store = configureStore({
  reducer: {
    tarefas: tarefasRedurcers
  }
})
export type RootReducer = ReturnType<typeof store.getState>

export default store
