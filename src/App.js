import { useSelector } from 'react-redux'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import GoogleMaker from './pages/GoogleMaker'
import GooglePreview from './pages/GooglePreview'
import GoogleTestsList from './pages/GoogleTestsList'

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<GoogleMaker />} />
            <Route path="tests" element={<GoogleTestsList />} />
            <Route path="tests/:id" element={<GooglePreview />} />
         </Routes>
      </div>
   )
}

export default App
