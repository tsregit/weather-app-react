import React from 'react'
import CityList from "./CityList"; // SUT: Subject under testing (Objeto del testeo)
import { render } from '@testing-library/react' // Herramienta que nos permite hacer un renderizado virtual, para luego hacer consultas

test("Weather render sunny", async () => {
    const cities = [
        {city: "Buenos Aires", country: "Argentina"},
        {city: "Santiago", country: "Chile"},
    ]
    const { findAllByRole } = render(<CityList cities={cities}/>)

    const temp = await findAllByRole("listitem")
    expect(temp).toHaveLength(2 )
})