import React, { useEffect, useState } from 'react'
import productservice from '../../service/appwrite/products'
import {Card} from '../index'
function shop() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    productservice.getproducts().then(data => {
      if(data){
        setProducts(data.documents)
      }
    })
  },[])
  
  return (
    <>
    <div className='text-2xl text-center my-6'>All Products</div>
    <div className='flex flex-wrap justify-evenly'>
      {products.map(items => (<Card key={items.id} {...items} />))}
    </div>
    </>
  )
}

export default shop
