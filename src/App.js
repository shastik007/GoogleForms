import './App.css'
import { Routes, Route } from 'react-router-dom'
import GoogleMaker from './pages/GoogleMaker'
import GooglePreview from './pages/GooglePreview'
import GoogleTestsList from './pages/GoogleTestsList'
import { Header } from './containers/Header'

function App() {
   return (
      <div className="App">
         <Header />
         <Routes>
            <Route path="/" element={<GoogleMaker />} />
            <Route path="tests" element={<GoogleTestsList />} />
            <Route path="tests/:id" element={<GooglePreview />} />
         </Routes>
      </div>
   )
}

export default App
