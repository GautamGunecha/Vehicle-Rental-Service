import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import server from '../../../apis/server'
import Loader from '../../../components/alert/Loader'

import Card from '../../../components/card/Card'
import Notifications from '../../../components/notifications/Notifications'

const Reset = () =>
{
    const scrum = useParams()
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState("")
    const [error, setError] = useState("")

    const { userInfo } = useSelector(state => state.userLogin)
    const navigate = useNavigate()

    const handleFormSubmit = async e =>
    {
        e.preventDefault()
        setLoading(true)
        await server.patch(`/auth/reset/${scrum}`, { password })
            .then(res =>
            {
                setError("")
                setMsg(res.data.msg)
                setTimeout(() =>
                {
                    navigate('/login')
                }, 2000);
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
                        <label>New Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                        <label>Conform Password</label>
                        <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />

                        <span className='loader'>
                            {loading === true && <Loader />}
                        </span>

                        <button type='submit'>Reset Password</button>
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

export default Reset