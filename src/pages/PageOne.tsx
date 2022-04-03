import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector, useAppDispatch } from '../app/hooks'

import { decrement, increment } from '../features/counter/counterSlice'

const PageOne = () => {
  const count: number = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
  <div>
    <button
      onClick={() => dispatch(increment())}>
      Increment
    </button>
    <span>{count}</span>
    <button
      onClick={() => dispatch(decrement())}>
      Decrement
    </button>
  </div>
  )
}

export default PageOne