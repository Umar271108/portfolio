import { useState } from 'react'
import './App.css'
import Header from './components/header/Header';
import HeaderContent from './components/header-content/HeaderContent';
import News from './components/pages/news/News';
import About from './components/pages/about/About';
import Layout from './components/layout/Layout';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [theme, setTheme] = useState('light')
  const [round, setRound] = useState('round')
  const [themeOn, setThemeOn] = useState(false)

  const click = () => {
      if(!themeOn){
          setTheme('light')
          setRound('round')
      } else(
          setTheme('dark'),
          setRound('round-clicked')
      )
      setThemeOn(!themeOn)
  }
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout header={<Header theme={theme} click={click} round={round}/>}/>}>
                <Route path='content' index element={<HeaderContent/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='news' element={<News/>}/>
            </Route>
        </Routes>
    </>
  );
}

export default App
