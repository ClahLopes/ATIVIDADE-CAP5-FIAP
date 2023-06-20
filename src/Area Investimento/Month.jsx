import { CaretRight } from '@phosphor-icons/react'
import React from 'react'

function Month({title1 , title2, title3, title4, title5}) {
    return (
        <div className='w-[375px] flex items-center justify-center bg-[#5C5C5C] text-[#FFFFF] '>
            <h1 className='text-[#F5F5F5] text-center p-2 text-sm font-bold'>{title1}</h1>
            <h1 className='text-[#F5F5F5] text-center p-2 text-sm font-bold'>{title2}</h1>
            <h1 className='text-[#F5F5F5] text-center p-2 text-sm font-bold'>{title3}</h1>
            <h1 className='text-[#F5F5F5] text-center p-2 text-sm font-bold'>{title4}</h1>
            <h1 className='text-[#F5F5F5] text-center p-2 text-sm font-bold'>{title5}</h1>
            <CaretRight className='text-[#F5F5F5] ml-4' />
        </div>

    )
}

export default Month