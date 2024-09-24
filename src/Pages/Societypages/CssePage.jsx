import React from 'react'
import CsseLeftSide from '../../SocietyLeftPage/CsseLeftSide'
import Mid from '../../SocietyMidPart/Mid'
import SocietyRightSide from '../../SocietyRightSide/SocietyRightSide'

const CssePage = () => {
  return (
    <>
      <div className='flex flex-row bg-slate-900'>
        <div className='w-1/6 h-full'>
          <CsseLeftSide/>
        </div>
        <div className='w-2/3 bg-white'><Mid/></div>
        <div className='w-1/6 h-full'><SocietyRightSide/> </div>
      </div>
    </>
  )
}

export default CssePage
