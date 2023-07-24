import { useState } from 'react'
import './App.css'
import ItemList from './components/ItemList/ItemList'
import Item, {ItemProps} from './components/Item/Item'


const arr:ItemProps[] = [

]

for (let i = 0; i<180; i++) {
  arr.push(  {itemImage:'https://shorturl.at/pxRS7', itemName: `${i}`, prob: Math.random()},)
}

function App() {
  const [isActive, setIsActive] = useState(false)
  

  return (
    <div className='w-full overflow-hidden'>
      <span className='fixed top-3 border-4 border-sky-500 w-1 h-10 bg-orange-600'></span>
      <ItemList items={arr}/>
    </div>
  )
}

export default App
