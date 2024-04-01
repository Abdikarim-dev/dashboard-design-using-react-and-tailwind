import React from 'react'

function Overview({name,price,review,icon}) {
  return (
    <div className="w-[350px] flex justify-between border border-[#E4E4E7] rounded-lg px-4 py-3">
          <div>
            <h3 className="pb-3 text-lg">{name}</h3>
            <p className="text-3xl font-semibold">{price}</p>
            <p className="text-[#82828A] text-md">{review}</p>
          </div>
          <div>
            <i class={`${icon} text-[#82828A]`}></i>
          </div>
        </div>
  )
}

export default Overview