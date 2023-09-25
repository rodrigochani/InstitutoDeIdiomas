import React from 'react'
import { Carrousel } from '../carrousel/Carrousel'
import Header from '../headers/Header'
import { Tarjeta } from '../tarjetas/Tarjeta'



const Principal = () => {
  return (
    <>
    <Header />
    <Carrousel />
    <Tarjeta />
    </>
  )
}

export default Principal