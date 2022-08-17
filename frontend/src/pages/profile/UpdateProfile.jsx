import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../../components/header/Header'
import "./UpdateProfile.css"
import server from '../../apis/server'
import Notifications from '../../components/notifications/Notifications'
import { userUpdate } from '../../redux/actions/authAction'
import Loader from '../../components/alert/Loader'

const UpdateProfile = () =>
{
    const { userInfo } = useSelector(state => state.userLogin)
    const { loading } = useSelector(state => state.alertReducer)

    const dispatch = useDispatch()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [msg, setMsg] = useState("")

    const handleFormSubmit = async e =>
    {
        e.preventDefault()
        await server.patch('/auth/update', { username, email, password },
            {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                }
            })
            .then(res =>
            {
                setError("")
                setMsg("Profile Updated.")
                dispatch(userUpdate(res.data))
            })
            .catch(err =>
            {
                setMsg("")
                setError(err.response.data.msg)
            })
    }
    return (
        <>
            <Header />
            <Notifications error={error} msg={msg} />
            <div className='update-profile'>
                <section className='update-profile-left'>
                    <img src={userInfo.avatar} alt={userInfo.username} />
                    <p>Username: {userInfo.username}</p>
                    <p>Email: {userInfo.email}</p>
                </section>
                <section className='update-profile-right'>
                    <form onSubmit={handleFormSubmit}>
                        <label>Update Username</label>
                        <input type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)} />

                        <label>Update Email</label>
                        <input type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />

                        <label>Update Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />


                        <span className='loader'>
                            {loading === true && <Loader />}
                        </span>


                        <button>Update Profile</button>
                    </form>

                </section>
            </div>
        </>
    )
}

export default UpdateProfile