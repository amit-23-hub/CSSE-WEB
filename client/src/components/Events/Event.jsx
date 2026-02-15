import React from 'react'
import EventHead from './EventHead/EventHead'
import EventContent from './EventContent/EventConnent'
import Bottom from '../../Pages/Bottom/Bottom'
import Navbar from '../../Navbar/Navbar'

const Event = () => {
  return (

    <>
      <Navbar />
      <EventHead />
      <EventContent />
      <Bottom />
    </>
  )
}

export default Event