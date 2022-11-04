import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Main from './components/Main'
import Footer from './components/Footer'
import ContactScreen from './components/ContactScreen'

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/contact' element={<ContactScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
