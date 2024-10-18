import React from 'react';
import './footwear.css';
import footwear from '../../assets/footwear.jpeg';
import footwear1 from '../../assets/footwear1.jpeg';
import footwear2 from '../../assets/footwear2.jpeg';
import footwear3 from '../../assets/footwear3.jpeg';


const footwearCollection = () => {
  return (
    <div className='card-container'>
      {data.map((item) => (
        <div key={item.productId} className='card'>
          <img src={item.img} alt={item.name} className='img' />
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

const data = [
  {
    name: 'golden heels',
    productId: '204',
    img: footwear,
    description: 'comfortabe soul',
  },
  {
    name: 'silver heels',
    productId: '204',
    img: footwear1,
    description: 'comfortabe soul',
  },
  {
    name: ' coat shoes',
    productId: '205',
    img: footwear2,
    description: 'heels',
  },
  {
    name: 'stripes shoes',
    productId: '206',
    img: footwear3,
    description: 'heels',
  },
 
];

export default footwearCollection;
