

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
    console.log(API_URL)
    try {
        const response = await fetch(`http://localhost:3030/products`, {
            method: "GET",
        });
        const body = (await response.json()) as any;
        return body;
    } catch (error) {
        throw new Error('Error obtaining sellers');
    }
}

export async function createProduct(formData: FormData) {
    const validatedFields = productSchema.safeParse({
      img: formData.get('img'),
      nombre: formData.get('nombre'),
      precio: Number(formData.get('precio')),
      categoria: formData.get('categoria'),
      descripcion: formData.get('descripcion'),
      unidades: Number(formData.get('unidades')),
      color: formData.get('color'),
    })
  
    if (!validatedFields.success) {
      return { error: validatedFields.error.flatten().fieldErrors }
    }
  
    const productData = validatedFields.data
  
    try {
      const response = await fetch('http://localhost:3030/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
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
  
export async function getProductById(productId: string) {
    console.log("Obteniendo producto con ID:", productId);

    try {
        const response = await fetch(`http://localhost:3030/products/${productId}`, {
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