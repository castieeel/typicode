import { configureStore } from '@reduxjs/toolkit'
import { typicodeApi } from '../services/api'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [typicodeApi.reducerPath]: typicodeApi.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([typicodeApi.middleware])
})

setupListeners(store.dispatch)
