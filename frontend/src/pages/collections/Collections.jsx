import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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

    useEffect(() =>
    {
        dispatch(getAllCarsAction())
    }, [dispatch])

    const handleNavigation = (id) =>
    {
        navigate(`/car/${id}`)
    }
    return (
        <>
            <Header />
            <div className='ourcollections'>
                <span className='ourcollections-loader'>
                    {loading ? <Loader /> : ""}
                </span>
                <div className='collections-display'>
                    {cars.map(data => (
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