import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    max-width:400px;

    margin: 30px auto;

    border-radius: 20px;

    background-color: var(--blue-600);
    box-shadow: 5px 5px 10px 2px #00000044;

    padding: 10%;

    color: white;
    text-align: center;

    p {
        max-width: 30ch;
        margin: auto;

        &:not(:last-child){
            margin-bottom: 30px;
        }
    }

    a {
        color: var(--yellow-600);
        display: inline-block;
        position: relative;

        --overflow: -3px;

        &:after {
            content: '';
            position: absolute;
            top: calc(100% - var(--overflow));
            left: var(--overflow);
            right: var(--overflow);
            bottom: var(--overflow);
            background-color: var(--yellow-600);

            mix-blend-mode: soft-light;
            
            transition: top .3s ease;
        }
        
        &:hover:after {
            top: var(--overflow);
        }
    }
`

const About = () => (
    <>
        <h1>Sobre</h1>
        <Card>
            <h1>Veim Deezer</h1>
            <p>
                Projeto criado com <a href="https://reactjs.org/" target="_blank">React</a>, <a href="https://redux.js.org/" target="_blank">Redux</a>, <a href="https://styled-components.com/" target="_blank">Styled Components</a> e a <a href="https://developers.deezer.com/api" target="_blank">Deezer Api</a>
            </p>
            <p>
                Author: <a href="https://github.com/mnegabriel">Gabriel Dantas</a>
            </p>
        </Card>
    </>
)

export { About }