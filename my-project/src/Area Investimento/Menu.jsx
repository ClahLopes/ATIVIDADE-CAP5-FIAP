import { List } from '@phosphor-icons/react';
import React from 'react';

function Menu() {
  return (
    <div className='w-[375px] flex items-center bg-[#3F3F3F] text-[#FFFFF] '>
        <List className='text-[#F5F5F5] mr-12 ml-2 text-2xl' />
        <h1 className='text-[#F5F5F5] max-md:text-center p-5 text-xl'>ÁREA DO INVESTIDOR</h1>
    </div>
  )
}

export default Menu;