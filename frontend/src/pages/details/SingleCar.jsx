import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { DatePicker } from 'antd';
import server from '../../apis/server';

import Header from '../../components/header/Header'
import Server from '../../apis/server'
import { useState } from 'react'
import { BiGasPump, BiRupee } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
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

    const handleCarBooking = async e =>
    {
        e.preventDefault()
        // send these values to backend
        const reqObject = {
            user: 'user id',
            car: 'car id',
            totalHours: "totalHours",
            totalAmount: "totalAmount",
            timeSlots: ['form', 'to']
        }
        await server.post('')
    }
    return (
        <>
            <Header />
            <div className='single-car'>
                <img src={car.image} alt="" />
                <section className='single-car-detail'>
                    <h1>{car.model}</h1>
                    <h3>{car.company}</h3>
                    <p>{car.aboutCar}</p>
                    <p><BiGasPump size={20} /> {car.fuelType}</p>
                    <p><BiRupee size={20} /> {car.rentPHour}/- per Hour</p>
                    <p><AiOutlineUser size={20} /> {car.nSeater}</p>
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
                    <p>Total Cost incl 20% tax: - ₹ {totalCost}</p>
                    <form onSubmit={handleCarBooking}>
                        <section>
                            <input required type="radio" />
                            <p>Im hereby responsible for any damage done to car during rental period.</p>
                        </section>
                        <button>Book a Car</button>
                    </form>
                </section>
            </div>
        </>
    )
}

export default SingleCar