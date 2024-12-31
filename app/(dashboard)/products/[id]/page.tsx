"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getProductById } from '@/actions/products';
import { Product } from '@/components/products/productsList';
import ProductView from '@/components/products/product';




export default function Page() {

  const params = useParams();
  const _id = params.id as string;
  const [product, setProduct] = useState<Product>();


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(_id);
        setProduct(response.product);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, []);

  return (
    <>
      {product ? <ProductView product={product} /> : <div className='w-full min-h-[100vh] grid place-items-center'>Loading...</div>}
    </>
  );
};