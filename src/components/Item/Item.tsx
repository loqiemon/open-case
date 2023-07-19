import React from 'react'

export type ItemProps = {
    itemName: string;
    itemImage: string;
}

function Item({itemName, itemImage}: ItemProps) {
  return (
    <div className=' w-32'>
      <img src={itemImage} alt="item_image" className='w-32'/>
      <span className='self-center'>{itemName}</span>
    </div>
  )
}

export default Item
