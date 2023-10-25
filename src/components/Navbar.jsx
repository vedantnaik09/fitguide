import React from 'react'

function Navbar() {
  return (
    <div className='w-full top-0'>
      <header>
        <nav className=''>
            <ul className='font-oswald flex mx-5 my-5 text-3xl gap-5 justify-evenly text-white'>
                <li>Muscle-Specifics</li>
                <li>Calorie Planner</li>
                <li>Routines</li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
