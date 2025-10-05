import React from 'react'



function Listitem({list}) {
  
  // Helper function to format numbers with commas
  const formatNumber = (num) => {
    if (num === null || num === undefined) return '-';
    // Ensure the number is a valid number type before formatting
    const numberValue = Number(num);
    if (isNaN(numberValue)) return '-';
    return numberValue.toLocaleString();
  };

  // Helper function to format price with 2 decimals
  const formatPrice = (price) => {
    if (price === null || price === undefined) return '-';
    return '$' + price.toFixed(2);
  };

  // Helper function to format percentage with 2 decimals
  const formatPercentage = (percent) => {
    if (percent === null || percent === undefined) return '-';
    return percent.toFixed(2) + '%';
  };

  return (
    <div className="listitems">
      {list.map((item) => {
        const priceChange = item.price_change_percentage_24h;
        return (
          <div className="item-data" key={item.id}>
            <div className="name-symbol">
              <img src={item.image} alt={item.name} className="coin-image" />
              <div >
                <h2 className="coin-name">{item.name}</h2>
                
              </div>
             
              
            </div>
             <div>
                  <h3 className="price">{item.symbol.toUpperCase()}</h3>
              </div>
            <div className="price">{formatPrice(item.current_price)}</div>
            <div className="price">{formatPrice(item.total_volume)}</div>
            <div
              className={`percentage-change ${
                priceChange >= 0 ? 'positive' : 'negative'
              }`}
            >
              {formatPercentage(priceChange)}
            </div>
            <div className="market-cap-label">
              Mkt Cap : {formatNumber(item.market_cap)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Listitem;
