import React from 'react'
import { Link } from 'react-router-dom'

import { useAppDispatch } from '../app/hooks'
import { resetState } from '../features/counter/counterSlice'

const Nav: React.FC = () => {
    const dispatch = useAppDispatch()

    //clicking clear will reset local storage as well as reset the number to 100.
    const clickedClear: () => void = () => {
        localStorage.removeItem('CounterLS')
        dispatch(resetState())
    }

    return(
    <div className="header">
        <Link to='/'>
            <button>
                page 1
            </button>
        </Link>

        <Link to='/p2'>
            <button>
                page 2
            </button>
        </Link>

        <button 
        onClick = {() => clickedClear()}>
            Reset
        </button>
    </div>
    );
}

export default Nav;