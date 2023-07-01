// import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Home from './components/pages/home/Home.jsx'
import About from './components/pages/company/About.jsx'
import Command from './components/pages/company/Command.jsx'
import Games from './components/pages/games/Games.jsx'
import Career from './components/pages/career/Career.jsx'
import News from './components/pages/news/News.jsx'
import Contacts from './components/pages/contacts/Contacts.jsx'
import ErrorPage from './components/pages/error/ErrorPage.jsx'
import './App.css'

function App() {

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route errorElement={<ErrorPage />} >
            <Route path='/' element={<Home />} />
            <Route path='/company/about' element={<About />} />
            <Route path='/company/command' element={<Command />} />
            <Route path='/games' element={<Games />} />
            <Route path='/career' element={<Career />} />
            <Route path='/news' element={<News />} />
            <Route path='/contacts' element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
