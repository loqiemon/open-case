import React, {useState} from 'react'
import Item, {ItemProps} from '../Item/Item'
import getRandomNumber from '../../utils/randomNumber';
import { fillArrayByProbability } from '../../utils/probability';
import spinSound from '../../assets/audio/spinSound.mp3';
import Button from '../Button/Button';

//Необходимо получать с сервера
const arr:ItemProps[] = [{itemImage:'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLP7LWnn8fvpMkjOqS99Smiwzk_0VvamH0LIHEdwFqYw2G_QC3lefsjZS4uJXLyWwj5HclxVTx0A', itemName: `AK-47 | Азимов`, prob: 0.08, color: 'Covert'},
                         {itemImage:'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_temukau_light_large.a41eb80c70cbbee5d84e53b5cd1eaa10954c938d.png', itemName: `M4A4 | Temukau`, prob: 0.03, color: 'Covert'},
                         {itemImage:'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf1OD3fC0X_9iJg4GYg_L4MrXVqWdU78Ryk9bN_Iv9nGu4qgE7Nnf6IdTEewQ2NQvSqVi_wbu9jZe1vZTNy3Bk63Er5HbbyUHhh0xFO7A-m7XAHt-G88cu', itemName: `MP5-SD | Умелые ручки`, prob: 0.9, color: 'Restricted'},
                         {itemImage:'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-NnuXxDL7dk2ZU5tFwhtbN_Iv9nBrlrkZrN22nLdCUIQM_NF7R-QK_yOzshpG77czMzCQy6CRw5S6Pnkfkn1gSOQPxEiVv', itemName: `P2000 | Дух огня`, prob: 0.14, color: 'Covert'},
                         {itemImage:'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJmYGCmfHmMrbUqWdY781lteXA54vwxgOw_BdkZWindY6VIFBrMgqF_1C6wLjujMDu6J7Lm3tm7HIm4XbbzEOpwUYbzunpojk', itemName: `SSG 08 | Мейнфрейм 001`, prob: 0.95, color: 'Industrial'},
                         {itemImage:'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9-8yJh4GckvP7Nb3ummJW4NE_3-qS89uki1bt-Uo5Zj3xLYSXIAQ7Ml_W_lXqwbi5hJ-0vcnAyyQyuj5iuyhoSspqEg', itemName: `Sawed-Off | Принцесса пустошей`, prob: 0.44, color: 'Classified'},
                         {itemImage:'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf2-r3YzhH6uO6nYeDg7nwYOqCzm0FvJwgiLyVpN-n3AW2rUVoMmHxcYaQdgNqNQvUqVjrye67m9bi68H1zE-y', itemName: `FAMAS | Голубые брызги`, prob: 0.74, color: 'Consumer'},
                         {itemImage:'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS092lnYmGmOHLP7LWnn8fv8ZyjL2XoIqijFfh_hduN2D1JIKTd1I6YVyD-1Htk73n1pK4vs6cnGwj5Hc6h7wWIQ', itemName: `P250 | Азимов`, prob: 0.24, color: 'Classified'},

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
