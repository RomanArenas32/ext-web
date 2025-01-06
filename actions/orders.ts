const adminApiUrl = process.env.ADMIN_API_URL;
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

export async function getOrderBycode(code: string) {
  try {
    const response = await fetch(`https://ext-server.onrender.com/orders/${code}`, {
      method: "GET",
    });
    const body = (await response.json()) as any;
    return body;
  } catch (error) {
    throw new Error('Error obtaining order');
  }
}


export async function getOrderById(id: string) {
  try {
    const response = await fetch(`https://ext-server.onrender.com/orders/one/${id}`, {
      method: "GET",
    });
    const body = (await response.json()) as any;
    return body;
  } catch (error) {
    throw new Error('Error obtaining order');
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
      const responseData = await response.json()  
      if (responseData.ok) {
        return { order: responseData.order, success: true }
      } else {
        return { success: false, error: responseData.error || 'Unknown error occurred' }
      }
    } catch (error) {
      console.error('Error in createOrder:', error)
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error occurred' }
    }
  }

  
  export async function canceledOrder(id: string) {
    try {
      const response = await fetch(`https://ext-server.onrender.com/orders/canceled/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), // Send as an object
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response}`)
      }
      
      const responseData = await response.json()      
      if (responseData.ok) {
        return { order: responseData.order, success: true }
      } else {
        return { success: false, error: responseData.error || 'Unknown error occurred' }
      }
    } catch (error) {
      console.error('Error in canceledOrder:', error)
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error occurred' }
    }
  }

  export async function confirmOrder(id: string) {
    try {
      const response = await fetch(`https://ext-server.onrender.com/orders/confirm/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), // Send as an object
      })
     
      const responseData = await response.json()      
      if (responseData.ok) {
        return { order: responseData.order, success: true }
      } else {
        return { success: false, error: responseData.error || 'Unknown error occurred' }
      }
    } catch (error) {
      console.error('Error in confirm Order:', error)
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error occurred' }
    }
  }
