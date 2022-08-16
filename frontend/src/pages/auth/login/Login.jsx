import React from 'react'
import { Link } from 'react-router-dom'

import "./Login.css"
import Card from '../../../components/card/Card'

const Login = () =>
{
    return (
        <div className='login'>
            <Card>
                <div className='login-content'>
                    <Link to='/'>
                        <h1>Drim</h1>
                    </Link>
                    <form>
                        <label>Email</label>
                        <input type="email" />

                        <label>Password</label>
                        <input type="password" />

                        <button>LogIn</button>
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