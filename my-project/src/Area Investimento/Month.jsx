import { CaretRight } from '@phosphor-icons/react'
import React from 'react'

function Month() {
    return (
        <div className='w-[375px] flex items-center justify-center bg-[#5C5C5C] text-[#FFFFF] '>
            <h1 className='text-[#F5F5F5] text-center p-2 text-sm font-bold'>Poupança</h1>
            <h1 className='text-[#F5F5F5] text-center p-2 text-sm font-bold'>Renda Fixa</h1>
            <h1 className='text-[#F5F5F5] text-center p-2 text-sm font-bold'>Tesouso Direto</h1>
            <h1 className='text-[#F5F5F5] text-center p-2 text-sm font-bold'>Ações</h1>
            <CaretRight className='text-[#F5F5F5] ml-4' />
        </div>

    )
}

export default Month