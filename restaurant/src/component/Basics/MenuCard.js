import React from "react";

const MenuCard = ({ data }) => {
    return (
        <div className="card-container">
            {data.map((item) => (
                <div key={item.id} className='card'>
                    <div className="card-body">
                        <div className="card-number card-circle subtle">{item.id}</div>
                        <div className='card-author subtle'>{item.category}</div>
                        <h2 className='card-title'>{item.foodName}</h2>
                        <span className='card-description subtle'>{item.foodDescription}</span>
                        <div className='card-read'>Read</div>
                        <div className='img-container'>
                            <img src={item.imageLink} alt={item.foodName} className='card-image' />
                        </div>
                        <div className='price-container'>
                            <span className='card-price'>{item.price}</span>
                            <span className='card-tag'>Order Now</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MenuCard;
