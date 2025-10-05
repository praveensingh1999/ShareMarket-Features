import React from 'react'

function SortbyMarketCapital({list , setList}) {
    const handleSort = () =>{
        const sorted = [...list].sort((a, b) => a.market_cap - b.market_cap);
    setList(sorted);
    console.log(sorted)

    }
  return (
    <div className='sortmarket'>
       <input type="button" value="Sort By Mkt Cap" onClick={handleSort} />
    </div>
  )
}

export default SortbyMarketCapital