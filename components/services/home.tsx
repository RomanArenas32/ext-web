'use client'

import ServicesList from "./servicesList";
import { useEffect, useState } from "react";
import { getServices } from "@/actions/services";

export interface Service {
  _id: string;
  __v: number;
  description: string;
  img: string;
  name: string;
  price: number;
}


export default function HomeServices() {

  const [services, setServices] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const reponse = await getServices()
        setServices(reponse.services)
      } catch (error) {
        console.log('Error obtaining services')
      }
    }
    fetchProducts()
  }, [])
  return (
    <div>
      <ServicesList services={services} />
    </div>
  );
}
