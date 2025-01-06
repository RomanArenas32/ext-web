"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getServiceById } from '@/actions/services';
import { Service } from '@/components/services/home';
import ServiceView from '@/components/services/service';




export default function Page() {

  const params = useParams();
  const _id = params.id as string;
  const [service, setService] = useState<Service>();


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getServiceById(_id);
        setService(response.service);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, []);

  return (
    <>
      {service ? <ServiceView service={service} /> : <div className='w-full min-h-[100vh] grid place-items-center'>Loading...</div>}
    </>
  );
};