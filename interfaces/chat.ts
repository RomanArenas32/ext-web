interface Message {
    content: string;
    _id: string;
    timestamp: string; // o puedes usar Date si prefieres tratar con objetos Date
}

export interface Chat {
    messages: Message[];
    code: string;
    seller: string;
    _id: string;
    createdAt: string; // o Date si prefieres tratar con objetos Date
    __v: number;
}

export interface ChatResponse {
    message: string;
    chat: Chat;
}
