import React from 'react';
import { ArrowLeft, CheckCircle, ArrowRight, Paperclip, Plus, ChevronLeft } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';

const ChatDetail = () => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <Link href={`/chats`}>
          <button className="p-2 -ml-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
        </Link>

        <div className="flex items-center ml-2">
          <div className="h-10 w-10 bg-[#2B5F3D] text-white rounded-full flex items-center justify-center text-base font-medium">
            M
          </div>
          <div className="ml-3">
            <div className="flex items-center gap-1.5">
              <h1 className="text-base font-medium text-gray-900">Negocio 1</h1>
              <CheckCircle className="w-5 h-5 text-[#4CAF50] fill-[#4CAF50]" />
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
              <p className="text-sm text-gray-500">Last seen 1 hour(s) ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Date Divider */}
        <div className="text-center text-sm text-gray-400">Wed 8:21 AM</div>

        {/* Chat Bubble */}
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 bg-[#2B5F3D] text-white rounded-full flex items-center justify-center text-base font-medium shrink-0">
            M
          </div>
          <div className="bg-gray-100 py-3 px-4 rounded-2xl max-w-[85%]">
            <p className="text-base text-gray-900">Listo amigo enviado, verificarlo 👍</p>
          </div>
        </div>

        {/* Confirmation Box */}
        <div className="border border-gray-200 rounded-xl p-4 space-y-3">
          <p className="text-base text-gray-600">Tu ya has recibido el producto confirme</p>
          <Link href={`/chats/box/finish`}>
            <Button className="flex items-center text-[#4CAF50] font-medium bg-transparent" variant="ghost" >
              Ver detalle <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </Link>

        </div>
      </div>

      {/* Input Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="flex items-center gap-2 max-w-2xl mx-auto">
          <Button className="p-2">
            <Paperclip className="w-6 h-6 text-gray-400" />
          </Button>
          <Input
            type="text"
            placeholder="Ingresa contenido aquí"
            className="flex-1 bg-gray-100 px-4 py-2.5 rounded-full text-base text-gray-900 placeholder:text-gray-500 focus:outline-none"
          />
          <Button className="p-2">
            <Plus className="w-6 h-6 text-gray-400" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;

