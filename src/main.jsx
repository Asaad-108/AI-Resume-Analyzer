import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App.jsx'
import Result from './Result.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} ></Route>
        <Route path='/result' element={<Result/>} ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
