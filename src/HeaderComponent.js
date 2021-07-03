import React from 'react'
import corageoLogo from './corageoLogo.png'

function Header() {
  return (
    <>
        <nav >
          <ul  className="bg-yellow-300 flex justify-center items-center">
            <li className="px-20">CV - 4 žrebci</li>
            <li className="px-20"><img src={corageoLogo} /></li>
          </ul>
        </nav>
    </>
  )
}

export default Header
