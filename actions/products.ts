

import { API_URL } from "@/lib/consts";
import { z } from 'zod'

export const productSchema = z.object({
  img: z.string(),
  nombre: z.string().min(1, "El nombre es requerido"),
  precio: z.number().min(0, "El precio debe ser mayor o igual a 0"),
  categoria: z.string().min(1, "La categoría es requerida"),
  descripcion: z.string().min(1, "La descripción es requerida"),
  unidades: z.number().int().min(1, "Las unidades deben ser al menos 1"),
  color: z.string().min(1, "El color es requerido"),
})

export async function getProducts() {
  try {
    const response = await fetch(`https://ext-server.onrender.com/products`, {
      method: "GET",
    });
    const body = (await response.json()) as any;
    return body;
  } catch (error) {
    throw new Error('Error obtaining sellers');
  }
}

export async function createProduct(values: any) {

  try {
    const response = await fetch('https://ext-server.onrender.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    console.log(response)

    if (!response.ok) {
      throw new Error(`Error al crear el producto: ${response.statusText}`)
    }

    const responseData = await response.json()
    return { success: true, data: responseData }
  } catch (error) {
    console.error('Error en la solicitud POST:', error)
    return { error: 'Error al crear el producto' }
  }
}

export async function getProductById(_id: string) {

  try {
    const response = await fetch(`https://ext-server.onrender.com/products/${_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error al obtener el producto: ${response.statusText}`);
    }
    const productData = await response.json();
    return productData;
  } catch (error) {
    console.error('Error en la solicitud GET:', error);
    throw new Error('Error al obtener el producto');
  }
}