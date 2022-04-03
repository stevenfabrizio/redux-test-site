import React from 'react'
import { Link } from 'react-router-dom'

const Nav: React.FC = () => {

    return(
    <div className="header">
        <Link to='redux-test-site/'>
            <button>
                page1
            </button>
        </Link>

        <Link to='redux-test-site/p2'>
            <button>
                page2
            </button>
        </Link>

        <button 
        onClick = {() => localStorage.removeItem('CounterLS')}>
            Clear
        </button>
    </div>
    );
}

export default Nav;