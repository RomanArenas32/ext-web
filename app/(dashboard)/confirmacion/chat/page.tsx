import React from 'react';
import { ArrowLeft, AlertCircle, Paperclip, Plus, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ChatWithWarning = () => {
    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md h-[760px] flex flex-col">
            {/* Header */}
            <div className="flex items-center mb-4">
                <Link href="/confirmacion">
                    <button>
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </button>
                </Link>

                <div className="flex ml-4 gap-2">
                    <div className="h-8 w-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        M
                    </div>
                    <div>
                        <div className="flex items-center gap-1">
                            <h1 className="text-sm font-medium">Negocio 1</h1>
                            <span className="text-green-500 text-xs">✔</span>
                        </div>
                        <p className="text-xs text-gray-500">Last seen 1 hour(s) ago</p>
                    </div>
                </div>
            </div>

            {/* Payment Status */}
            <div className="flex justify-between items-center bg-gray-100 rounded-lg p-3 mb-4">
                <p className="text-sm font-medium">
                    Pago pendiente <span className="text-yellow-600">22:16</span>
                </p>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm">
                    Producto recibido
                </button>
            </div>

            {/* Warning Message */}
            <div className="bg-yellow-100 text-yellow-800 p-3 rounded-lg mb-4 flex items-center gap-2 text-sm">
                <AlertCircle className="w-5 h-5" />
                <p>¡ATENCIÓN! NO confirme el pedido antes de confirmar que lo tienes en tus manos.</p>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto space-y-4">
                <div className="text-center text-xs text-gray-400">Wed 8:21 AM</div>
                <div className="flex items-start gap-3">
                    <div className="h-8 w-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        M
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg max-w-xs text-sm">
                        Ya está todo conforme amigo! 👍
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="bg-green-100 p-3 rounded-lg max-w-xs text-sm">
                        Muchas gracias
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="border-t pt-3 flex items-center gap-2">
                <button>
                    <Paperclip className="w-5 h-5 text-gray-500" />
                </button>
                <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    className="flex-1 bg-gray-100 px-4 py-2 rounded-full text-sm focus:outline-none"
                />
                <button className="p-2 bg-green-600 text-white rounded-full">
                    <Send className="w-5 h-5" />
                </button>
                <button>
                    <Plus className="w-5 h-5 text-gray-500" />
                </button>
            </div>

        </div>
    );
};

export default ChatWithWarning;
