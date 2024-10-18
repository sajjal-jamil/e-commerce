import React from 'react';
import './fragnance.css';
import fragnance from '../../assets/fragnances.jpeg';
import fragnance1 from '../../assets/fragnance1.jpeg';
import fragnance2 from '../../assets/fragnance2.jpeg';
import fragnance3 from '../../assets/fragnance3.jpeg';
import fragnance4 from '../../assets/fragnance4.jpeg';


const FootwearCollection = ({ addToCart }) => {
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
    img: fragnance,
    description: 'comfortabe soul',
  },
  {
    name: 'silver heels',
    productId: '204',
    img: fragnance1,
    description: 'comfortabe soul',
  },
  {
    name: ' coat shoes',
    productId: '205',
    img: fragnance2,
    description: 'heels',
  },
  {
    name: 'stripes shoes',
    productId: '206',
    img: fragnance3,
    description: 'heels',
  },
 
];

export default FootwearCollection;
