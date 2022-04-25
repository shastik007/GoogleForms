import './App.css'
import React, { Suspense } from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import Header from './containers/Header'

const GoogleMaker = React.lazy(() => import('./pages/GoogleMaker'))
const GooglePreview = React.lazy(() => import('./pages/GooglePreview'))
const GoogleTestsList = React.lazy(() => import('./pages/GoogleTestsList'))

function App() {
   return (
      <div className="App">
         <Header />
         <Suspense fallback={<h3>Loading...</h3>}>
            <Routes>
               <Route path="/" element={<GoogleMaker />} />
               <Route path="tests" element={<GoogleTestsList />} />
               <Route path="tests/:id" element={<GooglePreview />} />
            </Routes>
         </Suspense>
      </div>
   )
}

export default App
