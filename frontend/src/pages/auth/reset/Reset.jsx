import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../components/card/Card'

const Reset = () =>
{
    return (
        <div className='login'>
            <Card>
                <div className='login-content'>
                    <Link to='/'>
                        <h1>Drim</h1>
                    </Link>

                    <form>
                        <label>New Password</label>
                        <input type="password" />

                        <label>Conform Password</label>
                        <input type="password" />

                        <button>Reset Password</button>
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