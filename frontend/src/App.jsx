import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPg from './pages/Signup'
import SigninPg from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Send from './pages/Send'
import HomePg from './pages/HomePg'
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<HomePg/>}/>
        <Route path='/signup' element = {<SignupPg/>}/>
        <Route path='/signin' element = {<SigninPg/>}/>
        <Route path='/dashboard' element = {<Dashboard/>} />
        <Route path='/send'  element = {<Send/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
