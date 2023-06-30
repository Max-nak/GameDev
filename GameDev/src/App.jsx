// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Home from './components/pages/home/Home.jsx'
import Company from './components/pages/company/Company.jsx'
import Games from './components/pages/games/Games.jsx'
import Career from './components/pages/career/Career.jsx'
import News from './components/pages/news/News.jsx'
import Contacts from './components/pages/contacts/Contacts.jsx'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/games' element={<Games />} />
          <Route path='/career' element={<Career />} />
          <Route path='/news' element={<News />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
