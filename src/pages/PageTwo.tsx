import React from 'react'

import { useAppSelector } from '../app/hooks'
 
const PageTwo = () => { 
  const count: number = useAppSelector(state => state.counter.value)

  return (
    <h1>{count}</h1> 
  )
}

export default PageTwo