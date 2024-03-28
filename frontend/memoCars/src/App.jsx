
import './App.css'
import Booking from './pages/Booking'
import Cars from './pages/Cars'
import LandingPage from './pages/Landing'
import SignUpPage from './pages/Signup'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<LandingPage/>} />
        <Route path="/signup" element= {<SignUpPage/>} />
        <Route path="/cars" element= {<Cars/>} />
        <Route path="/booking" element= {<Booking/>} />



      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
