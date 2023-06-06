import { CaretRight } from '@phosphor-icons/react';
import React from 'react';

function Section({ props }) {
  return (
    <div className='flex items-center justify-between bg-[#C1C1C1] w-[345px] p-3 text-xs border-b-2 mb-3'>
      <p>{props}</p>
      <CaretRight />
    </div>
  )
}

export default Section;