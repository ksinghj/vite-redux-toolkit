import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    edit(state, action: PayloadAction<number>) {
      state.value = action.payload
    },
    reset(state) {
      state.value = 0
    },
  },
})

export const { increment, decrement, edit, reset } = counterSlice.actions

export default counterSlice.reducer
