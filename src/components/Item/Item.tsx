import React from 'react'
import { backgroundColor } from '../../style/itemColors';

export type ItemProps = {
    itemName: string;
    itemImage: string;
    prob: number;
    color: string;
}

function Item({itemName, itemImage, color}: ItemProps) {
  return (
    <div className={`w-32 h-32 border-black border border-solid `} style={{backgroundColor: backgroundColor[color] }}>
      <img src={itemImage} alt="item_image" className='w-128px h-98px object-fill max-w-fit'/>
      <span className='self-center w-32'>{ itemName }</span>
    </div>
  )
}

export default Item
