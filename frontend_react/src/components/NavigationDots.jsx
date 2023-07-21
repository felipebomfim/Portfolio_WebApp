import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {

        ['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className='app__navigation-dot'
            style={active === item ? { backgroundColor: 'rgb(48, 3, 120)' } : {}}
          >

          </a>
        ))
      }
    </div >
  )
}

export default NavigationDots