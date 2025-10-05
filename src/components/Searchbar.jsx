import { useState } from "react";
import React from 'react'

function Searchbar({setList, list}) {

    const [search, setSearch] = useState("");
     function handleSearch(e) {
    setSearch(e.target.value);
    
  }
  function handleEnter(e) {
    if (e.key == "Enter") {
        
            const search_data = list.filter(item => item.name == search || item.symbol == search
            );
            setList(search_data)
            console.log(search_data)
            

        
    }
}
  return (
    <div className='searchbar'>
        <input type="text" placeholder="Search By Name or Symbol"  onChange={handleSearch}
          onKeyDown={handleEnter}/>
      
    </div>
  )
}

export default Searchbar