import React from 'react'
import { useSelector } from 'react-redux'

const PageTwo = () => {
  const count = useSelector(state => state.counter.value)

  return (
    <h1>{count}</h1>
  )
}

export default PageTwo