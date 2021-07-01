import React from 'react'
import unnamed from '../src/unnamed.png'

function Header() {
  return (
    <>
        <nav >
          <ul  className="bg-yellow-300 flex justify-center items-center">
            <li className="px-20">CV - 4 žrebci</li>
            <li className="px-20"><img src={unnamed} /></li>
          </ul>
        </nav>
    </>
  )
}

export default Header
