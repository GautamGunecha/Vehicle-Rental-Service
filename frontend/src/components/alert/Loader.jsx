import React from 'react'

import { ThreeDots } from 'react-loader-spinner'


const Loader = () =>
{
    return (
        <>
            <ThreeDots
                height="40"
                width="40"
                radius="5"
                color='green'
                ariaLabel='three-dots-loading'
                wrapperStyle
                wrapperClass
            />
        </>
    )
}

export default Loader