import React from "react";
import { ChevronLeft, AlertCircle, Paperclip, Plus, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";

export default function Chatfin() {
  return (
    <div className="w-full max-w-2xl pt-2 bg-white h-[580px]">
      <div className="flex items-center ml-4 my-6">
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
      </div>
      <Separator />

      <div className="flex pt-4 px-6 items-center gap-2 font-bold text-sm">
        <span className="text-gray-600 text-[12px]">Pago pendiente</span>
        <span className="text-orange-400 text-[12px]">05:16:04</span>
        <div className="text-gray-200 text-[12px] p-2 px-4 rounded-3xl border-gray-300 ml-auto bg-green-900">
          <button>Producto recibido</button>
        </div>
      </div>
      <div className="bg-[#FFF8E1] mt-4 mx-6 text-green-900 text-sm gap-2 p-3 flex rounded-2xl items-center">
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
      <div className="p-4 space-y-6">
        {/* Date Divider */}
        <div className="text-center text-sm text-gray-400">Wed 8:21 AM</div>

        {/* Chat Bubble */}
        <div className="flex items-start gap-3">
          <div className="h-[24px] w-[24px] mt-1 bg-[#2B5F3D] text-white rounded-full flex items-center justify-center text-[14px] font-medium shrink-0">
            M
          </div>
          <div className="bg-gray-100 px-4 rounded-2xl max-w-[85%]">
            <div className="text-[14px] text-gray-900 bg-gray-100 p-2 rounded-lg w-fit">
              Ya está todo conforme amigo!👍👌
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="text-sm rounded-full w-fit ml-auto p-2 px-4 bg-green-100 text-gray-500 text-right">
            Muchas gracias
          </div>
          <div className="text-[40px] text-end mt-2">🙌</div>
        </div>
      </div>
    </div>
  );
}
