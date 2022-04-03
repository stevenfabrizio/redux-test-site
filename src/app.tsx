import React from 'react' 
import { Routes, Route, useNavigate} from 'react-router-dom' 

import { useAppDispatch } from './app/hooks'
import { loadLocalStorage } from './features/counter/counterSlice' 

import Nav from './pages/Nav';
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo';

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  //on page load, fetch localstorage if it exists.
  React.useEffect(() => {
    navigate('/')

    if (typeof localStorage.getItem("CounterLS") === 'string'){
      dispatch(loadLocalStorage()) 
    }
  },[])

  return(
  <>
    <Nav />
    <Routes>
      <Route index element={<></>}/>
      <Route path='redux-test-site/p2' element={<PageTwo />} />
      <Route path="*" element={<p>Page not found!</p>}/>
      <Route path='redux-test-site/' element={<PageOne />} />
    </Routes>
    <p>Page1 shows buttons and counter. Page2 is a different component and shows only counter. Redux is storing the counter and it is storing it in localstorage incase page is reloaded.</p>
  </>
  );
}

export default App