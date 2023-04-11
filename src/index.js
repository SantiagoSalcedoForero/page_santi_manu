import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Cabeza() {
    return <div>
        <h1>Esto es un componente</h1>
        <p>Esto va ser lo maximo</p>
    </div>
}

root.render(<div>
    <Cabeza />
    <Cabeza />
</div>)