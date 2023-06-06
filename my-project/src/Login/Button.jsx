import React from 'react'

export const Button = () => {
    return (
        <div className='flex gap-5 ml-10'>
            <button className='bg-[#C1C1C1] py-2 px-5 w-[135px] rounded-md'>
                CADASTRAR
            </button>
            <button className='bg-[#3F3F3F] py-2 px-5 w-[135px] rounded-md border-white text-[#FFFFFF]' >
                ENTRAR
            </button>
        </div>
    )
}
