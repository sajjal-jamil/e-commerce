import React from 'react';
import './access.css';
import access from '../../assets/access.jpeg';
import access1 from '../../assets/access1.jpeg';
import access2 from '../../assets/access2.jpeg';
import access3 from '../../assets/access3.jpeg';
import access4 from '../../assets/acces4.jpeg';
import access5 from '../../assets/access5.jpeg';
import purse from '../../assets/purse.jpeg';
import purse1 from '../../assets/purse1.jpeg';



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
    name: 'silver ring',
    productId: '204',
    img: access,
    description: 'zircon embedded',
  },
  {
    name: 'blue necklace set',
    productId: '204',
    img: access1,
    description: '1 carrat gold neacklace',
  },
  {
    name: 'shiny silver ring',
    productId: '205',
    img: access2,
    description: 'platinum embedded ring',
  },
  {
    name: 'earings',
    productId: '206',
    img: access3,
    description: 'pink stone embedded',
  },
  {
    name: 'silver earings',
    productId: '206',
    img: access4,
    description: 'sun like shape',
  },
  {
    name: 'blue locket set',
    productId: '206',
    img: access5,
    description: 'blue stone embedded framework',
  },
  {
    name: ' striped purse',
    productId: '206',
    img: purse,
    description: 'pink soft look purse',
  },
  {
    name: 'hand purse',
    productId: '206',
    img: purse1,
    description: 'white fur purse',
  },
 
];

export default footwearCollection;

