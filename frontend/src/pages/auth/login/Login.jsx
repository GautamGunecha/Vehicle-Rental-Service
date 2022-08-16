import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import "./Login.css"
import Card from '../../../components/card/Card'
import server from '../../../apis/server'
import Notifications from '../../../components/notifications/Notifications'
import Loader from '../../../components/alert/Loader'
import { loginAction } from '../../../redux/actions/authAction'

const Login = () =>
{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [msg, setMsg] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { userInfo } = useSelector(state => state.userLogin)
    const { loading } = useSelector(state => state.alertReducer)

    const handleFormSubmit = async e =>
    {
        e.preventDefault()
        await server.post('/auth/login', { email, password })
            .then(res =>
            {
                setError("")
                setMsg("Login Success")
                dispatch(loginAction(res.data))
            })
            .catch(err =>
            {
                setMsg("")
                setError(err.response.data.msg)
            })
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

                        <label>Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                        <span className='loader'>
                            {loading === true && <Loader />}
                        </span>

                        <button type='submit'>LogIn</button>
                    </form>

                    <p>Not registered?{" "}
                        <span className='loginRegister'>
                            <Link to='/register'>
                                Register
                            </Link>
                        </span>
                    </p>

                    <p>Forgot Password? {" "}
                        <span className='loginRegister'>
                            <Link to='/forgot/password'>
                                Click Here
                            </Link>
                        </span>
                    </p>

                    <p style={{ color: "#000", fontWeight: "600", fontSize: "17px" }}>Terms & Conditions:{" "}
                        <span style={{ color: "#fff", fontWeight: "400", fontSize: "12px" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit ea cumque. Nulla molestias ducimus sapiente fugiat ex nam voluptatem minima eos. Necessitatibus a commodi, dolorem ea eveniet autem voluptate.
                        </span>
                    </p>
                </div>
            </Card >
        </div >
    )
}

export default Login