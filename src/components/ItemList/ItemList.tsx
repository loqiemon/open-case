import React, {useState} from 'react'
import Item, {ItemProps} from '../Item/Item'

export type ItemListProps = {
    items: ItemProps[]
}

function ItemList({items}: ItemListProps) {
    const [pos, setPos] = useState<number>(-490);

    const av = ():void => {
        // setPos(490)
        console.log('start spin');
        const len:number = items.length;
        const drop: number = Math.floor(Math.random() * len)
        console.log(drop, 'drop')
        const margin:number = (drop*129)-490;
        console.log(margin)
        setPos(margin)
    }

    
  return (
    <>
        <div className='flex flex-row gap-1px bg-green-300  ease-in duration-1000 overflow-hidden' style={{marginLeft: `-${pos}px`}}>
            {items.map(item => <Item itemImage={item.itemImage} itemName={item.itemName}  />)}
        </div>
        <button onClick={av}>Start</button>
    </>
  )
}

export default ItemList
