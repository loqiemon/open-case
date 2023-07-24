import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import ItemList from './components/ItemList/ItemList'
import Item, {ItemProps} from './components/Item/Item'


let arr:ItemProps[] = [

]

for (let i = 0; i<80; i++) {
  arr.push(  {itemImage:'https://shorturl.at/pxRS7', itemName: `${i}`},)
}

function App() {
  const [isActive, setIsActive] = useState(false)
  

  const ap = ():void => {
    console.log(111)
  }


  return (
    <div className='w-full overflow-hidden'>
      <span className='fixed top-3 border-4 border-sky-500 w-1 h-10 bg-orange-600'></span>
      <ItemList items={arr}/>
      {/* <Button onClick={ap} text={'add'}/> */}
    </div>
  )
}

export default App
