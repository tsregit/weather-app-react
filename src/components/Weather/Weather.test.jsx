import React from 'react'
import Weather from "./Weather"; // SUT: Subject under testing (Objeto del testeo)
import { render } from '@testing-library/react' // Herramienta que nos permite hacer un renderizado virtual, para luego hacer consultas

test("Weather render sunny", async () => {
    const { findByRole } = render(<Weather temperature={10} state="sunny"/>)

    const temp = await findByRole("heading")
    expect(temp).toHaveTextContent("10")
})

test("Weather render cloud", async () => {
    const { findByRole } = render(<Weather temperature={10} state="cloud"/>)

    const temp = await findByRole("heading")
    expect(temp).toHaveTextContent("10")
})