import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
        <i className='bx bx-award about__icon'></i>
        <h3 className='about__title'>
          Experience
          <span className='about__subtitle'>2 Years</span>
        </h3>
      </div>
      <div className='about__box'>
        <i className='bx bx-briefcase-alt about__icon'></i>
        <h3 className='about__title'>
          Completed
          <span className='about__subtitle'>20+ Projects</span>
        </h3>
      </div>
      <div className='about__box'>
        <i className='bx bx-support about__icon'></i>
        <h3 className='about__title'>
          Support
          <span className='about__subtitle'>Outline 24/7</span>
        </h3>
      </div>
    </div>
  )
}

export default Info
