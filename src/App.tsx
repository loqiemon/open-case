import { useState } from 'react'
import './App.css'
import ItemList from './components/ItemList/ItemList'





function App() {
  const [isActive, setIsActive] = useState(false)
  

  return (
    <div className='w-full overflow-hidden'>
      <span className='fixed top-3 border-4 border-sky-500 w-1 h-10 bg-orange-600'></span>
      <ItemList />
    </div>
  )
}

export default App
