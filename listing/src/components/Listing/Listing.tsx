import React from 'react';
import './Listing.css';
import type { ItemProps } from '../types/item';

interface ListingProps {
  items: ItemProps[];
}

function Listing ({ items = [] }: ListingProps): React.JSX.Element {
  
  return (  
    <div className="item-list">
      {items.map(item => (       
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage?.url_570xN}/>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{item.title.length > 50 ?
                                      item.title.slice(0, 50) + "..." :
                                      item.title
                                    }</p>
            <p className="item-price">{item.currency_code === "USD" ?
                                      `$ ${item.price}` :
                                      item.currency_code === "EUR" ?
                                      `€ ${item.price}` :
                                      `${item.price} GBP`
                                    } </p>
            <p className={`item-quantity level-${item.quantity <= 10 ? "low" : item.quantity <= 20 ? "medium" : "high"}`}>{item.quantity} left</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Listing;













