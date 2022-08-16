import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import server from '../../../apis/server'
import Card from '../../../components/card/Card'
import Notifications from '../../../components/notifications/Notifications'
import Loader from '../../../components/alert/Loader'
import { useSelector } from 'react-redux'

const Forgot = () =>
{
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState("")
    const [error, setError] = useState("")

    const { userInfo } = useSelector(state => state.userLogin)
    const navigate = useNavigate()


    const handleFormSubmit = async e =>
    {
        e.preventDefault()
        setLoading(true)
        await server.post('/auth/forgot', { email })
            .then(res =>
            {
                setError("")
                setMsg(res.data.msg)
            })
            .catch(err =>
            {
                setMsg("")
                setError(err.response.data.msg)
            })
        setLoading(false)
    }

    useEffect(() =>
    {
        if (userInfo) navigate('/')
    }, [userInfo, navigate])

    return (
        <div className='login'>
            <Notifications msg={msg} error={error} />
            <Card>
                <div className='login-content'>
                    <Link to='/'>
                        <h1>Drim</h1>
                    </Link>

                    <form onSubmit={handleFormSubmit}>
                        <label>Email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                        <span className='loader'>
                            {loading === true && <Loader />}
                        </span>

                        <button>Conform</button>
                    </form>

                    <p style={{ color: "#000", fontWeight: "600", fontSize: "17px" }}>Terms & Conditions:{" "}
                        <span style={{ color: "#fff", fontWeight: "400", fontSize: "12px" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit ea cumque. Nulla molestias ducimus sapiente fugiat ex nam voluptatem minima eos. Necessitatibus a commodi, dolorem ea eveniet autem voluptate.
                        </span>
                    </p>
                </div>
            </Card>
        </div>
    )
}

export default Forgot