
import { z } from 'zod'

export const orderSchema = z.object({
  product: z.string(),
    paymentMethod: z.string(),
    code: z.string(),
    status: z.string(),
})

export async function getOrders() {
  try {
    const response = await fetch(`https://ext-server.onrender.com/orders`, {
      method: "GET",
    });
    const body = (await response.json()) as any;
    return body;
  } catch (error) {
    throw new Error('Error obtaining orders');
  }
}

export async function createOrder(values: any) {  
    try {
      const response = await fetch('https://ext-server.onrender.com/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })  
      if (!response.ok) {
        throw new Error(`Error creating order: ${response.status} ${response.statusText}`)
      }
  
      const responseData = await response.json()  
      if (responseData.success) {
        return { success: true, data: responseData.data }
      } else {
        return { success: false, error: responseData.error || 'Unknown error occurred' }
      }
    } catch (error) {
      console.error('Error in createOrder:', error)
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error occurred' }
    }
  }
  