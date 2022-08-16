import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/header/Header'
import { getAllVehicles } from '../../redux/actions/vehicleAction'
import Loader from '../../components/alert/Loader'

const Collections = () =>
{
    const { cars } = useSelector(state => state.carsReducer)
    const { loading } = useSelector(state => state.alertReducer)

    const dispatch = useDispatch()

    useEffect(() =>
    {
        dispatch(getAllVehicles())
    }, [dispatch])

    return (
        <>
            <Header />
            <div>
                {loading ? <Loader /> : ""}
                Car Collections {cars.length}
            </div>
        </>
    )
}

export default Collections