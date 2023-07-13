import './App.css'
import {ChevronDown} from 'lucide-react'

import Upper from './components/parts/Upper'
import Lower from './components/parts/Lower'
import EmailCopy from './components/Email'
import About from './components/parts/About'

function App() {
  return (
    <div className='snap-proximity'>
        <Upper/>
        <div className='h-24 bg-yellow-100 flex justify-center flex-row'>
          <ChevronDown className='self-center'></ChevronDown>
          <p className='self-center text-purple-900 font-black text-3xl'> ALGUNS DOS MEUS PROJETOS</p>
          <ChevronDown className='self-center'></ChevronDown>

        </div>
        <Lower/>
        <div className='h-40'>
        <EmailCopy/>
        </div>
        <About/>
    </div>

  )
}

export default App
