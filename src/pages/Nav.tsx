import React from 'react'
import { Link } from 'react-router-dom'

export const Nav: React.FC = () => {

    return(
    <div className="header">
        <Link to='/'>
            <button>
                page1
            </button>
        </Link>

        <Link to='/p2'>
            <button>
                page2
            </button>
        </Link>
    </div>
    );
}