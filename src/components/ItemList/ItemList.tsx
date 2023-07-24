import React, {useState} from 'react'
import Item, {ItemProps} from '../Item/Item'
import getRandomNumber from '../../utils/randomNumber';
import { fillArrayByProbability } from '../../utils/probability';
import spinSound from '../../assets/audio/spinSound.mp3';
import Button from '../Button/Button';

//Необходимо получать с сервера
const arr:ItemProps[] = [{itemImage:'https://shorturl.at/pxRS7', itemName: `Asiimov`, prob: 0.1}, {itemImage:'https://shorturl.at/pxRS7', itemName: `Apple`, prob: 0.3}, {itemImage:'https://shorturl.at/pxRS7', itemName: `Fracture`, prob: 0.5}, {itemImage:'https://shorturl.at/pxRS7', itemName: `Rentgen`, prob: 0.9},]
let items:ItemProps[] = []



function ItemList() {
    const styleStr = 'h-36 flex flex-row gap-1px bg-green-300  overflow-hidden'

    const [pos, setPos] = useState<number>(490);
    const [style, setStyle] = useState<string>(styleStr+'ease-[cubic-bezier(0.98,0.95,0.98,1)] duration-6000');
    const [activeButton, setActiveButton] = useState(false);


    //Отрефакторить!!!!
    const spin = ():void => {
        const audio = new Audio(spinSound).play()
        setActiveButton(true)
        setStyle(styleStr)
        setPos(490)
        items.length = 0
        items = fillArrayByProbability(arr, 110)
        const len:number = items.length;
        const drop: number = Math.floor(getRandomNumber(len-7, len-5))
        const margin:number = (drop*129)-getRandomNumber(485, 609); //485-609
        setTimeout(() => {
            setStyle(styleStr+'ease-[cubic-bezier(0.98,0.95,0.98,1)] duration-6000')
            setPos(-margin)
        }, 350)
        setTimeout(()=> {
            setActiveButton(false)
        }, 6351)
    }

    
  return (
    <>
        <div className={style}  style={{marginLeft: `${pos}px`}}>
            {items.map((item, index) => <Item 
                                            itemImage={item.itemImage}  
                                            itemName={item.itemName} 
                                            key={index}
                                            prob={item.prob}
                                        />)}
        </div>
        <Button onClick={spin} text='Start' disabled={activeButton}/>
    </>
  )
}

export default ItemList
