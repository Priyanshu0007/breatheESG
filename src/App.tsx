
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignUpIn from './pages/SignUpIn'
import Dashboard from './pages/Dashboard'
function App() {

  return (
    <div>
      <Routes>
         <Route path='/' element={<Dashboard/>} />
         <Route path='/sign' element={<SignUpIn/>} />
       </Routes>
    </div>
  )
}

export default App
