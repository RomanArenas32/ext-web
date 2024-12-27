import React from 'react';
import { ArrowLeft, CheckCircle, ArrowRight, Paperclip, Plus } from 'lucide-react';

const ChatDetail = () => {
  return (
    <div className="w-full ml-4 mr-4 p-4 bg-white rounded-lg h-[400px] shadow-md space-y-4">
      {/* Header */}
      <div className="flex  mb-4">
        <button>
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex ml-2 gap-2">
          <div className="h-8 w-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
            M
          </div>
          <div>
            <div className="flex items-center gap-1">
              <h1 className="text-sm font-medium">Negocio 1</h1>
              <CheckCircle className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-xs text-gray-500">Last seen 1 hour(s) ago</p>
          </div>
        </div>
      </div>

      {/* Date Divider */}
      <div className="text-center text-xs text-gray-400">Wed 8:21 AM</div>

      {/* Chat Bubble */}
      <div className="flex items-start gap-3 pb-4 pt-4">
        <div className="h-8 w-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
          M
        </div>
        <div className="bg-gray-100 p-3 rounded-lg max-w-xs text-sm pb-4">
          Listo amigo enviado, verificarlo 👍
        </div>
      </div>

      {/* Confirmation Box */}
      <div className="border pt-4 rounded-lg p-4 space-y-2">
        <p className="text-sm text-gray-600">Tu ya has recibido el producto confirme</p>
        <button className="flex items-center text-green-600 text-sm font-medium">
          Ver detalle <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="flex items-center border-t pt-10 mt-4">
        <button className="p-2">
          <Paperclip className="w-5 h-5 text-gray-500" />
        </button>
        <input
          type="text"
          placeholder="Ingresa contenido aquí"
          className="flex-1 bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="p-2">
          <Plus className="w-5 h-5 text-gray-500" />
        </button>
      </div>

    </div>
  );
};

export default ChatDetail;
