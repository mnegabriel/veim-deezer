import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/favoritos">Favoritos</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
            </ul>
        </nav>
    </header>
)

export { Header }