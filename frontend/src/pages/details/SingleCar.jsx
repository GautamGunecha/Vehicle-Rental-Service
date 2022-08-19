import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { DatePicker } from 'antd';
import server from '../../apis/server';
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';

import Header from '../../components/header/Header'
import Server from '../../apis/server'
import { useState } from 'react'
import { BiGasPump, BiRupee } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import Notifications from '../../components/notifications/Notifications'
import "./SingleCar.css"

const SingleCar = () =>
{
    const { RangePicker } = DatePicker;

    const { id } = useParams()
    const [car, setCar] = useState([])
    // rental stuff
    const [pickup, setPickup] = useState()
    const [drop, setDrop] = useState()
    const [rentalHour, setRentalHour] = useState(0)
    const [totalCost, setTotalCost] = useState()
    const [msg, setMsg] = useState("")
    const [error, setError] = useState("")

    const { userInfo } = useSelector(state => state.userLogin)

    useEffect(() =>
    {
        const getCar = () =>
        {
            Server.get(`/vehicle/getcar/${id}`)
                .then(res => setCar(res.data))
                .catch(err => console.log(err))
        }
        getCar()

        const calculateTotalAmount = () =>
        {
            let totalAmount = (0.2 * (rentalHour * car.rentPHour)) + (rentalHour * car.rentPHour)
            setTotalCost(totalAmount)
        }

        calculateTotalAmount()

    }, [id, rentalHour, drop, pickup, car.rentPHour])

    const selectTimeSlots = (values) =>
    {
        setPickup(moment(values[0]).format('MMM DD yyyy, HH:mm'))
        setDrop(moment(values[1]).format('MMM DD yyyy, HH:mm'))
        setRentalHour(values[1].diff(values[0], 'hours'))
    }

    const handleCarBooking = async (token) =>
    {
        // send these values to backend
        if (!userInfo) return setError("Please login to book car")

        const reqObject = {
            car: id,
            user: userInfo._id,
            bookedTimeSlots: {
                pickUpDate: pickup,
                dropDate: drop
            },
            totalHours: rentalHour,
            totalAmount: totalCost,
            token
            // paymentID: 123456789
        }
        await server.post('/bookings', reqObject, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        }).then(res =>
        {
            setError("")
            setPickup()
            setDrop()
            setTotalCost()
            setRentalHour(0)
            setMsg(res.data.msg)
        })
            .catch(err =>
            {
                setMsg("")
                setError(err.response.data.msg)
            })
    }

    const getToken = (token) =>
    {
        if (token) handleCarBooking(token)
    }
    return (
        <>
            <Header />
            <Notifications error={error} msg={msg} />
            <div className='single-car'>
                <img src={car.image} alt="" />
                <section className='single-car-detail'>
                    <h1>{car.model}</h1>
                    <h3>{car.company}</h3>
                    <p>{car.aboutCar}</p>
                    <p><BiGasPump size={20} /> {car.fuelType}</p>
                    <p><BiRupee size={20} /> {car.rentPHour}/- per Hour</p>
                    <p><AiOutlineUser size={20} /> {car.nSeater}</p>
                    {/* Check available slots */}
                    {/* calender */}
                    <RangePicker showTime={{
                        format: 'HH:mm',
                    }}
                        format="YYYY-MM-DD HH:mm"
                        onChange={selectTimeSlots}
                    />

                    {
                        rentalHour !== 0
                        && <p>Total Rental Hour: {rentalHour} hours</p>}
                    {totalCost !== 0 && <p>Total Cost incl 20% tax: - ₹ {totalCost}</p>}
                    {
                        totalCost !== 0 &&
                        <div>
                            <section className='form-section'>
                                <input required type="radio" />
                                <p>Im hereby responsible for any damage done to car during rental period.</p>
                            </section>

                            <StripeCheckout
                                token={getToken}
                                shippingAddress
                                amount={totalCost * 100}
                                currency='inr'
                                stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
                            >
                                <button type='submit'>Book a Car</button>
                            </StripeCheckout>
                        </div>
                    }

                </section>
            </div>

        </>
    )
}

export default SingleCar