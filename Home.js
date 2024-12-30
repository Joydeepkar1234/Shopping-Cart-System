import {faker} from '@faker-js/faker';
import {useContext, useState} from 'react';
import SingleProduct from './SingleProduct';
import './style.css';
import { CartContext } from '../Context';
// import {Cart} from './Cart';

 faker.seed(100);

const Home = () => {
 
  

  const ProductsArray = [...Array(100)].map(() => ({
    id: faker.datatype.uuid(),
    productName: faker.commerce.productName(),
    productDescription: faker.commerce.productDescription(),
    image: faker.image.image(),
    price: faker.commerce.price(),
    inStock: faker.helpers.arrayElement([0,3,5,6,7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1,2,3,4,5]),
}));

    const[Products] = useState(ProductsArray)
    // console.log(ProductsArray)
    // console.log(cart);
    const {cart, setCart} = useContext(CartContext);
  return (
    <div className='productContainer'>
        {Products.map((prod) => (
            <SingleProduct prod ={prod} key={prod.id} cart={cart} setCart={setCart}/>
        ))}
      
      
    </div>
  );
};

export default Home
