import React, {useState} from 'react'
import Item, {ItemProps} from '../Item/Item'
import getRandomNumber from '../../utils/randomNumber';

export type ItemListProps = {
    items: ItemProps[]
}

function ItemList({items}: ItemListProps) {
    const [pos, setPos] = useState<number>(1225);



    const spin = ():void => {
        // setPos(645)
        const len:number = items.length;
        const drop: number = Math.floor(getRandomNumber(0, len))
        const margin:number = (drop*129)-getRandomNumber(485, 609); //485-609
        setPos(-margin)
    }

    
  return (
    <>
        <div className='flex flex-row gap-1px bg-green-300  ease-in duration-1000 overflow-hidden ' style={{marginLeft: `${pos}px`}}>
            {items.map((item, index) => <Item itemImage={item.itemImage} itemName={item.itemName}  key={index}/>)}
        </div>
        <button onClick={spin}>Start</button>
    </>
  )
}

export default ItemList
