import React from 'react'
import ItemList from '../../components/ItemList/ItemList'
import Navbar from '../../components/Navbar/Navbar'

function Home() {
  return (
    <div className='w-full'>
        <Navbar/>
        {/* <div className='w-full overflow-hidden'>
            <span className='fixed top-3 border-4 border-sky-500 w-1 h-10 bg-orange-600'></span>
            <ItemList />
        </div> */}
    </div>
  )
}

export default Home
