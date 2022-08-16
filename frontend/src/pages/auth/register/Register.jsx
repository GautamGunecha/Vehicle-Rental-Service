import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Card from '../../../components/card/Card'
import server from '../../../apis/server'
import Notifications from '../../../components/notifications/Notifications'
import Loader from '../../../components/alert/Loader'
import { useSelector } from 'react-redux'

const Register = () =>
{
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [msg, setMsg] = useState("")

    const navigate = useNavigate()
    const { userInfo } = useSelector(state => state.userLogin)

    const handleFormSubmit = async e =>
    {
        e.preventDefault()
        setLoading(true)
        await server.post('/auth/register', { username, email, password })
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
                console.log(err)
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
        <>
            <Notifications error={error} msg={msg} />
            <div className='login'>
                <Card>
                    <div className='login-content'>
                        <Link to='/'>
                            <h1>Drim</h1>
                        </Link>

                        <form onSubmit={handleFormSubmit}>
                            <label>Username</label>
                            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />

                            <label>Email</label>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                            <label>Password</label>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                            <span className='loader'>
                                {loading === true && <Loader />}
                            </span>

                            <button>Register</button>
                        </form>

                        <p>Already registered?{" "}
                            <span className='loginRegister'>
                                <Link to='/login'>
                                    Login
                                </Link>
                            </span>
                        </p>

                        <p style={{ color: "#000", fontWeight: "600", fontSize: "17px" }}>Terms & Conditions:{" "}
                            <span style={{ color: "#fff", fontWeight: "400", fontSize: "12px" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit ea cumque. Nulla molestias ducimus sapiente fugiat ex nam voluptatem minima eos. Necessitatibus a commodi, dolorem ea eveniet autem voluptate.
                            </span>
                        </p>

                    </div>
                </Card>
            </div>
        </>
    )
}

export default Register