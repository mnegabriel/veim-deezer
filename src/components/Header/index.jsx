import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.header`
    width: calc(100% - 20px);
    margin: 10px auto 0;
`

const List = styled.ul`
    list-style: none;

    padding: 0;
    margin: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: var(--blue-600);
        position: relative;
    }
    
    .selected:after {
        
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;

        transform: translateX(-50%);
        border-radius: 20px;

        width: 110%;
        height: 3px;
        background-color: currentColor;

    }
`

const Header = () => (
    <Wrapper>
        <nav>
            <List>
                <li>
                    <NavLink activeClassName="selected" to="/sobre">
                        <i
                            className="fas fa-info-circle fa-2x"
                            title="Sobre"
                        ></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" to="/" exact>
                        <i
                            className="fas fa-compass fa-2x"
                            title="Explorar"
                        ></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" to="/favoritos">
                        <i
                            className="fas fa-star fa-2x"
                            title="Favoritos"
                        ></i>
                    </NavLink>
                </li>
            </List>
        </nav>
    </Wrapper>
)

export { Header }