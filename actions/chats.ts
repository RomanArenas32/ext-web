
export async function getChats() {
    try {
        const response = await fetch(`https://ext-server.onrender.com/chats`, {
            method: "GET",
        });
        const body = (await response.json()) as any;
        return body;
    } catch (error) {
        throw new Error('Error obtaining chats');
    }
}

export async function createChat() {
    try {
        const response = await fetch('https://ext-server.onrender.com/chats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const responseData = await response.json()
        if (responseData.ok) {
            return { order: responseData.order, success: true }
        } else {
            return { success: false, error: responseData.error || 'Unknown error occurred' }
        }
    } catch (error) {
        console.error('Error in create chat:', error)
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error occurred' }
    }
}


export async function getChatById(_id: string) {
    try {
        const response = await fetch(`https://ext-server.onrender.com/chats/${_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error al obtener el chat: ${response.statusText}`);
        }
        const productData = await response.json();
        return productData;
    } catch (error) {
        console.error('Error en la solicitud GET:', error);
        throw new Error('Error al obtener el chat');
    }
}

export async function sendMessage({id, content}: {id: string, content: string}) {
    try {
        const response = await fetch(`https://ext-server.onrender.com/chats/${id}/message`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({content}),
        })
        const responseData = await response.json()
        if (responseData.ok) {
            return { order: responseData.order, success: true }
        } else {
            return { success: false, error: responseData.error || 'Unknown error occurred' }
        }
    } catch (error) {
        console.error('Error in create chat:', error)
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error occurred' }
    }
}