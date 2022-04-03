import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 100
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 2
      localStorage.setItem('CounterLS', state.value.toString());
    },
    decrement: state => {
      state.value -= 3
      localStorage.setItem('CounterLS', state.value.toString())
    },
    loadLocalStorage: state => {
      state.value = parseInt(localStorage.getItem('CounterLS')!)
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    resetState: state => {
      state.value = 100
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, loadLocalStorage, incrementByAmount, resetState } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer