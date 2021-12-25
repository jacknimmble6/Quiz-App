import React from 'react'
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home  from './components/Home/Home';
import Form1 from './components/Form/Form1.js' 
import QuizDetails from './components/Home/QuizDetails'
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/quiz/detail/:id' element={<QuizDetails />}/>
        <Route path='/create' element={<Form1 />}/>
      </Routes>
    </Router>
  )
}

export default App;