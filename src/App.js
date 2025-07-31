import { useState } from 'react'
import './App.css'
import Component1 from './components/Component1'

function App() {
const [name , setName] = useState('hossein')
    
    return (
        <>
        <h1>app Component</h1>
        <p>hello {name}</p>
        <hr />
        <Component1 />
        </>
    )
}
export default App