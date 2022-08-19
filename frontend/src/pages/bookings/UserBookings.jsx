import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import server from '../../apis/server'

import Header from '../../components/header/Header'
import Loader from '../../components/alert/Loader'
import { MdOutlineLocalGasStation } from 'react-icons/md'
import "./UserBookings.css"

const UserBookings = () =>
{
    const { userInfo } = useSelector(state => state.userLogin)
    const [userBookings, setUserBookings] = useState([])
    console.log(userBookings)
    const [loading, setLoading] = useState(false)

    useEffect(() =>
    {
        const getUserBookings = async () =>
        {
            setLoading(true)
            await server.get(`/bookings/user/${userInfo._id}`, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                }
            })
                .then(res => setUserBookings(res.data))
                .catch(err =>
                {
                    setUserBookings([])
                    console.log(err)
                })
            setLoading(false)
        }
        getUserBookings()
    }, [userInfo._id, userInfo.token])

    return (
        <>
            <Header />
            <div className='user-bookings'>
                <h1>{userInfo.username} bookings</h1>
                {loading ? <Loader /> : ""}

                <div className='user-bookings-details'>
                    {userBookings?.map(data => (
                        <section key={data._id} className='details-section'>
                            <section className='details-section-left'>
                                <p>{data.car.model}</p>
                                <p><MdOutlineLocalGasStation size={20} /> {data.car.fuelType}</p>
                                <p>Rent/hour: ₹ {data.car.rentPHour}</p>
                                <p>Total Amount: ₹ {data.totalAmount}</p>
                                <p>Booking Slot: {data.bookedTimeSlots.pickUpDate} - {" "}{data.bookedTimeSlots.dropDate}</p>
                            </section>
                            <section className='details-section-right'>
                                <img src={data.car.image} alt="" />
                            </section>
                        </section>
                    ))}
                </div>
            </div>
        </>
    )
}

export default UserBookings