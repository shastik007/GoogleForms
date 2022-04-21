import { useSelector } from 'react-redux'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import GoogleMaker from './pages/GoogleMaker'
import GooglePreview from './pages/GooglePreview'

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<GoogleMaker />} />
            <Route path="preview" element={<GooglePreview />} />
         </Routes>
      </div>
   )
}

export default App
