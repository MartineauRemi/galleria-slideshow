import Header from "../layout/Header"
import { render, fireEvent } from "@testing-library/react"
import React from 'react'

test('The header contains a logo', () => {
    render(<Header />)
    const logo = document.querySelector('img')
    expect(logo).toBeInTheDocument()
})

test('The header contains a slideshow button', () => {
    render(<Header />)
    const slideshowBtn = document.querySelector('button')
    expect(slideshowBtn).toBeInTheDocument()
    expect(slideshowBtn.textContent).toBe('start slideshow')
})