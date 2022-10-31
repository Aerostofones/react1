import React from "react"
import ReactDOM from 'react-dom/client'
import Saludar from "./Saludar"
import {Boton} from "./Boton"
import PropTypes  from 'prop-types'

const rootelement = document.getElementById('root')
const root = ReactDOM.createRoot(rootelement)

function Saludar1(){
    return <h3>hola </h3>
}
function Saludar2(){
    return <h3>Joaquin</h3>
}
function Saludar3(){
    return <h3>mendez</h3>
}

root.render(
    <>
        <Boton text='Click me'/>
        <Boton />
        <Boton/>
        <Boton/>
        <Boton/>
        <Boton/>


    </>
)