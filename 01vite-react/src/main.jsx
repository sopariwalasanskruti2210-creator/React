import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom React App!!!!!</h1>
        </div>
    )
}

// const ReactElement = {
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank'
//     },
//     Children : 'Click me to visit google'
// }

const ReactElement = React.createElement(
    'a' ,
    {href : 'https://google.com',
    target: '_blank'},
    'Click me to visit google'
)

const anotherElemenet = (
    <a href="https://google.com" target="_blank">Visit Google</a>
)

createRoot(document.getElementById('root')).render(
ReactElement
)
