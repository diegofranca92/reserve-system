import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

export function Header() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/reservas'>Reservas</Link>
            </li>
          </ul>
          <div>
            <h4>Minhas Reservas</h4>
            <span>4 reservas</span>
          </div>
        </nav>
      </div>
    </BrowserRouter>
  )
}
