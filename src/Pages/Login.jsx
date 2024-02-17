import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/context'

const Login = () => {

    const { login } = useGlobalContext();

    return (
        <div className='main'>
            <div>
                <h2>{login}</h2>
                <Link to={'/'} className='button'>
                    <button>Go back</button>
                </Link>
            </div>
        </div>
    )
}

export default Login