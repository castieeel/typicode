import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

interface iPage {
  numPage: number
}

const initialState: iPage = {
  numPage: 1
}

export const slicePage = createSlice({
  name: 'slicePage',
  initialState,
  reducers: {
    setNumPage: (state, action: PayloadAction<number>) => ({
      ...state,
      numPage: action.payload
    })
  }
})

export const { setNumPage } = slicePage.actions
export default slicePage.reducer
