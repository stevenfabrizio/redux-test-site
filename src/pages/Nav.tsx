import React from 'react'
import { Link } from 'react-router-dom'

const Nav: React.FC = () => {

    return(
    <div className="header">
        <Link to='redux/p1'>
            <button>
                page1
            </button>
        </Link>

        <Link to='redux/p2'>
            <button>
                page2
            </button>
        </Link>
    </div>
    );
}

export default Nav;