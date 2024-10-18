import React from 'react';
import './women.css';
import women1 from '../../assets/women1.jpeg';
import women2 from '../../assets/women2.jpeg';
import women3 from '../../assets/women3.jpeg';
import women4 from '../../assets/women4.jpeg';
import women5 from '../../assets/women5.jpeg';


const WomenCollection = () => {
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
    name: '2 pc lawn suit',
    productId: '204',
    img: women1,
    description: 'unstitched',
  },
  {
    name: '3 pc embroidered suit',
    productId: '205',
    img: women2,
    description: 'stitched',
  },
  {
    name: 'Casual dress',
    productId: '206',
    img: women3,
    description: 'casual wear',
  },
  {
    name: 'Evening gown',
    productId: '207',
    img: women4,
    description: 'formal wear',
  },
  {
    name: 'Summer dress',
    productId: '208',
    img: women5,
    description: 'lightweight fabric',
  },
];

export default WomenCollection;
