import { useSelector } from 'react-redux'
import './App.css'

// import React from 'react'
import { Header } from './containers/Header'
import { Quiz } from './containers/Quiz'

function App() {
   const store = useSelector((state) => {
      return state
   })

   console.log(store)
   return (
      <div className="App">
         <Header />
         <Quiz />
      </div>
   )
}

export default App
