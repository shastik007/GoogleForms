import { useSelector } from 'react-redux'
import './App.css'

import { Header } from './containers/Header'
import { Quiz } from './containers/Quiz'

function App() {
  const a = ''

  const state = useSelector((state) => {
    return state
  })

  console.log(state)
  return (
    <div className='App'>
      <Header />
      <Quiz />
    </div>
  )
}

export default App
