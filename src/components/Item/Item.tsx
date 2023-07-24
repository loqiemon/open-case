import React from 'react'

export type ItemProps = {
    itemName: string;
    itemImage: string;
}

function Item({itemName, itemImage}: ItemProps) {
  return (
    <div className='w-32 h-32'>
      <img src={itemImage} alt="item_image" className='w-128px h-98px object-fill max-w-fit'/>
      <span className='self-center w-32'>{itemName}</span>
    </div>
  )
}

export default Item
