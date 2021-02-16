import React from 'react'
import CityList from './CityList'

export default {
    title: "CityList",
    component: CityList
}
const cities = [
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Santiago", country: "Chile"},
]
export const CityExample = () => <CityList cities={cities}/>