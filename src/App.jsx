import Header  from './Header'
import About  from './pages/About'
import Contact  from './pages/Contact'
import Projects  from './pages/Projects'
import Home from './Home'
import {Toaster} from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/about' element= {<About />}/>
        <Route path='/contact' element= {<Contact />}/>
        <Route path='/projects' element= {<Projects />}/>
      </Routes>
      <Toaster />
    </>
  )
}

export default App
