import React from 'react'

function SortbyPercentage({list, setList}) {
    const handlesort = ()=>{
        const sorted = [...list].sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h);
    setList(sorted);
    console.log(sorted)
    }
  return (
     <div className='sortpercentage'>
       <input type="button" value="Sort by percentage" onClick={handlesort}  />
    </div>
  )
}

export default SortbyPercentage