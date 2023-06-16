import React from 'react'

export const ButtonEscuro = ({props}) => {
    return (
        <div>
            <button className='bg-[#3F3F3F] text-[#f5f5f5] py-2 px-5 w-[135px] rounded-md'>
                {props}
            </button>
        </div>
    )
}