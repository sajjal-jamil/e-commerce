import React from 'react';
import './men.css';
import men1 from '../../assets/men1.jpeg';
import men2 from '../../assets/men2.jpeg';
import men3 from '../../assets/men3.jpeg';


const menCollection = () => {
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
    name: '2 pc cotton suit',
    productId: '204',
    img: men1,
    description: 'unstitched',
  },
  {
    name: ' pc suit',
    productId: '205',
    img: men2,
    description: 'stitched',
  },
  {
    name: 'Casual dress',
    productId: '206',
    img: men3,
    description: 'casual wear',
  },
 
];

export default menCollection;
