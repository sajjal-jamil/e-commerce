import React from 'react';
import './kids.css';
import kids1 from '../../assets/kids1.jpeg';
import kids2 from '../../assets/kids2.jpeg';
import kids3 from '../../assets/kids3.jpeg';


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
    img: kids1,
    description: 'unstitched',
  },
  {
    name: ' pc suit',
    productId: '205',
    img: kids2,
    description: 'stitched',
  },
  {
    name: 'Casual dress',
    productId: '206',
    img: kids3,
    description: 'casual wear',
  },
 
];

export default menCollection;
