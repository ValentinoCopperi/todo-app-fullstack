import React from 'react'

export default function BoxData({ title, quantity, bg ,textcolor}) {
  return (
    <article className='bg-white border flex flex-col items-center justify-center m-4 min-w-[200px] min-h-[100px] xl:min-h-[150px]  xl:min-w-[250px] rounded-xl' style={{ background: bg }}>

      <span className='text-6xl'style={{color:textcolor}}>{quantity}</span>
      <h5 className='font-semibold text-gray-700'>{title}</h5>

    </article>
  )
}
