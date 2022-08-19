import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/header/Header'
import Server from '../../apis/server'
import { useState } from 'react'
import { BiGasPump, BiRupee } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import "./SingleCar.css"

const SingleCar = () =>
{
    const { id } = useParams()

    const [car, setCar] = useState([])

    useEffect(() =>
    {
        const getCar = () =>
        {
            Server.get(`/vehicle/getcar/${id}`)
                .then(res => setCar(res.data))
                .catch(err => console.log(err))
        }
        getCar()
    }, [id])

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

                    <p>Total Cost incl taxes: - </p>
                    <button>Book a Car</button>
                </section>
            </div>
        </>
    )
}

export default SingleCar