

import { API_URL } from "@/lib/consts";
import { z } from 'zod'

export const serviceSchema = z.object({
  img: z.string(),
  nombre: z.string().min(1, "El nombre es requerido"),
  precio: z.number().min(0, "El precio debe ser mayor o igual a 0"),
  categoria: z.string().min(1, "La categoría es requerida"),
  descripcion: z.string().min(1, "La descripción es requerida"),
})

export async function getServices() {
  console.log(API_URL)
  try {
    const response = await fetch(`https://ext-server.onrender.com/services`, {
      method: "GET",
    });
    const body = (await response.json()) as any;
    return body;
  } catch (error) {
    throw new Error('Error obtaining sellers');
  }
}

export async function createService(formData: FormData) {
  const validatedFields = serviceSchema.safeParse({
    img: formData.get('img'),
    nombre: formData.get('name'),
    precio: Number(formData.get('price')),
    categoria: formData.get('category'),
    descripcion: formData.get('description'),
  })

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors }
  }

  const productData = validatedFields.data

  try {
    const response = await fetch('https://ext-server.onrender.com/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
    console.log(response)

    if (!response.ok) {
      throw new Error(`Error al crear el servicio: ${response.statusText}`)
    }

    const responseData = await response.json()
    return { success: true, data: responseData }
  } catch (error) {
    console.error('Error en la solicitud POST:', error)
    return { error: 'Error al crear el producto' }
  }
}

export async function getServiceById(_id: string) {
  console.log("Obteniendo servicio con ID:", _id);

  try {
    const response = await fetch(`https://ext-server.onrender.com/services/${_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error al obtener el servicio: ${response.statusText}`);
    }
    console.log(response)
    const productData = await response.json();
    return productData;
  } catch (error) {
    console.error('Error en la solicitud GET:', error);
    throw new Error('Error al obtener el producto');
  }
}