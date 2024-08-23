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
      state.isLoading = false
    }
  }
})

export const { setCardData, setLoadingFalse } = tvSlice.actions

export default tvSlice.reducer

