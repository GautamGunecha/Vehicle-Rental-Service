import React, { useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify';

const Notifications = ({ error, msg }) =>
{
    useEffect(() =>
    {
        if (error) toast.error(error)
        if (msg) toast.success(msg)
    }, [error, msg])

    return (
        <ToastContainer autoClose={2000} />
    )
}

export default Notifications