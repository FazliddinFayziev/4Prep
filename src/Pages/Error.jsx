import React from 'react';
import { useGlobalContext } from '../context/context';

const Error = () => {

    const { error } = useGlobalContext();

    return (
        <div className='main'>Error</div>
    )
}

export default Error