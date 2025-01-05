import React, { useState } from "react";
import { ChevronLeft, Paperclip, Send } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { format } from 'date-fns';
import ErrorBoundary from "./ErrorBoundary";
import ErrorScreen from "./ErrorScreen";
import { sendMessage } from "@/actions/chats";

export default function Chatfin({ chat, fetchChats }: { chat: any, fetchChats: ()=>void }) {
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    try {
      await sendMessage({ id: chat._id, content: newMessage });
      fetchChats();
      setNewMessage("");
    } catch (error) {
      console.error('Error in send message:', error);
    }
  };

  if (!chat || !chat.messages) {
    return <ErrorScreen />;
  }

  const messagesByDate = chat.messages.reduce((acc: any, message: any) => {
    const date = format(new Date(message.timestamp), 'dd/MM/yyyy');
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(message);
    return acc;
  }, {});

  return (
    <ErrorBoundary fallback={<ErrorScreen />}>
      <div className="flex flex-col h-screen">
        <header className="flex items-center h-[56px]">
          <Link href={`/chats`}>
            <button className="p-2">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </Link>
          <div className="items-center mx-16 justify-center flex flex-col">
            <div className="flex items-center gap-1.5">
              <div className="h-[16px] w-[16px] bg-[#2B5F3D] text-white rounded-full flex items-center justify-center text-[10px] font-medium">
                K
              </div>
              <h1 className="text-base font-medium text-gray-900">
                KellyFashion
              </h1>
              <Image
                src="/icon/check.svg"
                alt="green check"
                width={16}
                height={16}
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
              <p className="text-sm text-gray-500">Última vez hoy hace 1 hora</p>
            </div>
          </div>
        </header>
        <Separator />

        <div className="flex items-center gap-2 font-bold text-sm h-[56px] px-6 py-3">
          <span className="text-gray-600 text-[12px]">Pago pendiente</span>
          <span className="text-orange-400 text-[12px]">05:16:04</span>
          <div className="text-gray-200 text-[12px] p-2 px-4 rounded-3xl border-gray-300 ml-auto bg-green-900">
            <button>Producto recibido</button>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="bg-[#FFF8E1] text-[#12332A] text-[12px] gap-1 p-3 flex rounded-md items-center w-[327px] ">
            <Image
              src="/icon/alert.svg"
              alt="alert"
              width={20}
              height={20}
              className="ml-4"
            />
            ¡ATENCIÓN! NO confirme el pedido antes de confirmar que lo tienes en tus
            manos.
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {Object.entries(messagesByDate).map(([date, messages]: [string, any]) => (
            <div key={date} className="overflow-y-auto max-h-[calc(70vh-56px-56px-56px)]">
              <div className="text-center text-[12px] text-[#72777A]">{date}</div>
              {messages.map((message: any, index: number) => (
                <div key={index} className="mt-6">
                  {message.sender === chat.seller ? (
                    <div className="flex items-start gap-3">
                      <div className="h-[24px] w-[24px] mt-1 bg-[#2B5F3D] text-white rounded-full flex items-center justify-center text-[14px] font-medium shrink-0">
                        {chat.seller.charAt(0)}
                      </div>
                      <div className="bg-white rounded-2xl max-w-[85%] shadow-sm">
                        <div className="text-[14px] text-gray-900 p-3">
                          {message.content}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-2">
                      <div className="text-sm rounded-full w-fit ml-auto p-2 px-4 bg-green-100 text-green-900 text-right">
                        {message.content}
                      </div>
                      {message.emoji && (
                        <div className="text-[40px] text-end mt-2">{message.emoji}</div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t mb-[100px]">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <button type="button" className="p-2">
              <Paperclip className="w-6 h-6 text-gray-500" />
            </button>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Me avisas cualquier cosa"
              className="flex-1 p-2 px-4 rounded-full bg-gray-100 focus:outline-none"
            />
            <button type="submit" className="p-2 bg-[#4CAF50] rounded-full">
              <Send className="w-6 h-6 text-white" />
            </button>
          </form>
        </div>
      </div>
    </ErrorBoundary>
  );
}

