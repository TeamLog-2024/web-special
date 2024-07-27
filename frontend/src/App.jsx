import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import Write from './pages/Write'
import Detail from './pages/Detail'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/write' element={<Write />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </Router>
  )
}

export default App