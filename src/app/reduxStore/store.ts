import { configureStore } from '@reduxjs/toolkit'
import productSlice from './features/product/productSlice'

export const store = configureStore({
  reducer: {
    productState: productSlice,
    // userState: userSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch