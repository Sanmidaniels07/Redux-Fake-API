import React, {useEffect} from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {setProducts} from '../redux/actions/productAction'
import ProductComponent from './ProductComponent'

const ProductListing = () => {
    // useselector is used here to get the product from the store by passing the state as argument
  const products = useSelector((state) => state)
  const dispatch =useDispatch()  // used to dispatch action
  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
        console.log('Err', err);
    });
    dispatch(setProducts(response.data)); // product passed into action
  }
  console.log(products);
  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <div className='ui grid contaner'>
      <ProductComponent/>
    </div>
  )
}

export default ProductListing
