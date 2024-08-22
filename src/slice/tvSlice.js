import { createSlice } from '@reduxjs/toolkit'

const tvSlice = createSlice({
  name: 'tv',
  initialState: {
    cardData: [],
    isLoading: true
  },
  reducers: {
    setCardData: (state, action) => {
      state.cardData = [...action.payload]
    },
    setLoadingFalse: (state) => {
      console.log(state.isLoading)
      state.isLoading = false
      console.log(state.isLoading)
    }
  }
})

export const { setCardData, setLoadingFalse } = tvSlice.actions

export default tvSlice.reducer

