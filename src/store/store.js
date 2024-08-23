import { configureStore } from '@reduxjs/toolkit'
import tvSlice from '../slice/tvSlice'

const store = configureStore({
  reducer: {
    tvSlice
  }
})

export default store

