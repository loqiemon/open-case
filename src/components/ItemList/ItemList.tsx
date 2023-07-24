import React, {useState} from 'react'
import Item, {ItemProps} from '../Item/Item'
import getRandomNumber from '../../utils/randomNumber';
import { fillArrayByProbability } from '../../utils/probability';
import spinSound from '../../assets/audio/spinSound.mp3';
import Button from '../Button/Button';

//Необходимо получать с сервера
const arr:ItemProps[] = [{itemImage:'https://goo.su/diQvz8', itemName: `AK-47 | Азимов`, prob: 0.08, color: 'Covert'},
                         {itemImage:'https://goo.su/QDZsj', itemName: `M4A4 | Temukau`, prob: 0.03, color: 'Covert'},
                         {itemImage:'https://goo.su/7rxvu', itemName: `MP5-SD | Умелые ручки`, prob: 0.9, color: 'Restricted'},
                         {itemImage:'https://goo.su/C9VxL5F', itemName: `P2000 | Дух огня`, prob: 0.14, color: 'Covert'},
                         {itemImage:'https://goo.su/wMjS', itemName: `SSG 08 | Мейнфрейм 001`, prob: 0.95, color: 'Industrial'},
                         {itemImage:'https://goo.su/ExHq4', itemName: `Sawed-Off | Принцесса пустошей`, prob: 0.44, color: 'Classified'},
                         {itemImage:'https://goo.su/ZMrK', itemName: `FAMAS | Голубые брызги`, prob: 0.74, color: 'Consumer'},
                         {itemImage:'https://goo.su/zA7n', itemName: `P250 | Азимов`, prob: 0.24, color: 'Classified'},

                        ]
let items:ItemProps[] = []



function ItemList() {
    const styleStr = 'h-36 flex flex-row gap-1px overflow-hidden'

    const [pos, setPos] = useState<number>(1225);
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
                                            color={item.color}
                                        />)}
        </div>
        <Button onClick={spin} text='Start' disabled={activeButton}/>
    </>
  )
}

export default ItemList
