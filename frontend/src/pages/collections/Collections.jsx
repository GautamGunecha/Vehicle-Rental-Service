import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { DatePicker } from 'antd';
import moment from 'moment';

import Header from '../../components/header/Header'
import { getAllCarsAction } from '../../redux/actions/carsAction'
import Loader from '../../components/alert/Loader'
import { BiUser } from 'react-icons/bi'
import "./Collections.css"

const Collections = () =>
{
    const dispatch = useDispatch()
    const { cars } = useSelector(state => state.carsCollections)
    const { loading } = useSelector(state => state.alertReducer)
    const navigate = useNavigate()

    const [totalCars, setTotalCars] = useState([])

    const { RangePicker } = DatePicker;

    useEffect(() =>
    {
        dispatch(getAllCarsAction())
    }, [dispatch])


    useEffect(() =>
    {
        setTotalCars(cars)
    }, [cars])
    const handleNavigation = (id) =>
    {
        navigate(`/car/${id}`)
    }

    const setFilter = (values) =>
    {
        let pickupDateFrom = moment(values[0], 'MMM DD yyyy, HH:mm')
        let dropDateTo = moment(values[1], 'MMM DD yyyy, HH:mm')

        // pickUpDate
        // dropDate

        let temp = []
        for (let car of cars)
        {
            if (car.bookingSlote.length === 0)
            {
                temp.push(car)
            } else
            {
                for (let booking of car.bookingSlote)
                {
                    if ((pickupDateFrom.isBetween(booking.pickUpDate, booking.dropDate)) ||
                        (dropDateTo.isBetween(booking.pickUpDate, booking.dropDate)) || (
                            moment(booking.pickUpDate).isBetween(pickupDateFrom, dropDateTo)
                        ) ||
                        moment(booking.dropDate).isBetween(pickupDateFrom, dropDateTo)
                    ) { } else
                    {
                        temp.push(car)
                    }
                }
            }
        }

        setTotalCars(temp)
    }
    return (
        <>
            <Header />
            <div className='ourcollections'>
                {/* Filter Section */}
                <section className='ourcollections-filter'>
                    <label>Filter by availability</label>
                    <RangePicker showTime={{
                        format: 'HH:mm',
                    }}
                        format="YYYY-MM-DD HH:mm"
                        onChange={setFilter} />
                </section>

                <span className='ourcollections-loader'>
                    {loading ? <Loader /> : ""}
                </span>
                <div className='collections-display'>
                    {totalCars.map(data => (
                        <div onClick={() => handleNavigation(data._id)} key={data._id} className='collections-data'>
                            <img src={data.image} alt={data.model} />
                            <section className='collections-data-details'>
                                <h3>{data.model}</h3>
                                <span>
                                    <BiUser size={20} />
                                    {data.nSeater}
                                </span>
                            </section>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Collections