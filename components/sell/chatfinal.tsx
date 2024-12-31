import React from 'react';
import { ArrowLeft, AlertTriangle, Paperclip, Plus, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ChatKeyboard = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg py-10 shadow-md h-[560px] flex flex-col">
      {/* Header */}
      <div className="flex items-center mb-8">
      <Link href="/confirmation2">
        <button>
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        </Link>
        <div className="flex ml-4 gap-2">
          <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center text-[20px] font-bold">
            G
          </div>
          <div>
            <div className="flex items-center gap-1">
              <h1 className="text-[18px] font-bold">Gladys .C</h1>
              <span className="text-green-500 text-lg ml-2">✔</span>
            </div>
            <p className="text-[14px] font-bold text-gray-500">Last seen 1 hour(s) ago</p>
          </div>
        </div>
      </div>

      {/* Payment Status */}
      <div className="flex justify-between items-center bg-gray-200 rounded-lg p-4 mb-4">
        <p className="text-sm font-bold">
          Pago pendiente <span className="text-yellow-600">22:16</span>
        </p>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm">
          Producto recibido
        </button>
      </div>

      {/* Warning Message */}
      <div className="bg-yellow-100 py-4 border-yellow-400 border-l-4 rounded-3xl mt-4">
        <div className="flex items-start px-6 gap-4">

      <AlertTriangle className="text-yellow-500 w-10 h-10" />
      <p className="text-sm font-bold text-gray-700"> 
      <span className="font-bold text-red-500">¡ATENCIÓN! </span> NO confirme el pedido antes de confirmar que lo tienes en tus manos.</p>
      </div>
        </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto space-y-4">
        <div className="text-center pt-6 text-xs text-gray-400">Wed 8:21 AM</div>
        <div className="flex items-start pt-1 gap-3">
          <div className="h-8 w-8 bg-green-600 text-white rounded-full flex items-center mt-1 justify-center text-sm font-bold">
            M
          </div>
          <div className="bg-gray-200 p-3 rounded-lg max-w-xs text-sm">
            Ya está todo conforme amigo! 👍
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-green-200 p-3 rounded-lg max-w-xs text-sm">
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
      <div>
      </div>
    </div>
  );
};

export default ChatKeyboard;
