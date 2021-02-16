import React from 'react'
import CityInfo from "./CityInfo"; // SUT: Subject under testing (Objeto del testeo)
import { render } from '@testing-library/react' // Herramienta que nos permite hacer un renderizado virtual, para luego hacer consultas

test("cityInfoRender", async () => {
    //Estandar de las 3 AAA:
    //Arrange
    //act
    //Assert

    //Un rol es un componente que actuan como: input, titulo, etc.
    //Render: Renderiza el componente y retorna una serie  de funciones de utilidad
    //En este caso utilizamos findAllByRole para consultar a nuestro componente CityInfo
    //Vamos a analizar su estado en el Assert
    const city = "Buenos Aires,"
    const country = "Argentina"
    const { findAllByRole } = render(<CityInfo city={city} country={country}/>)

    //Act
    // EN este caso findAllByRole nos va a buscar todos los componentes que sean cabeceras
    // heading -> h1, h2, h3, h4....
    // EL resultado es una array de componentes
    const cityAndCountryComponent = await findAllByRole("heading")

    //Assert
    expect(cityAndCountryComponent[0]).toHaveTextContent(city)
    expect(cityAndCountryComponent[1]).toHaveTextContent(country)
});