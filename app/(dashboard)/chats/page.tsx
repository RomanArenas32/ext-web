import React from 'react';
import { Search, CheckCircle, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

export default function Page() {
    const chats = [
        {
            name: 'Negocio 1',
            message: 'Listo amigo enviado, verificarlo 👍',
            date: '4/11/24',
            verified: true,
            avatar: 'G',
            status: 'online',
        },
        {
            name: 'ElDorado Market',
            message: 'Muchas gracias por la compra, espero q...',
            date: '4/11/24',
            verified: true,
            avatar: 'C',
            status: 'online',
        },
        {
            name: 'Gamarrita',
            message: 'Recibí todo conforme',
            date: '25/12/24',
            verified: true,
            avatar: 'K',
            status: 'online',
        },
        {
            name: 'El sobrino',
            message: 'Gracias por la compra',
            date: '7/09/24',
            verified: true,
            avatar: 'F',
            status: 'online',
        },
    ];

    return (
        <>
            <header className='w-full flex flex-row justify-between p-4 h-[56px]'>
                <div className='w-full flex justify-start items-start flex-1'>
                    <Link href={`/`}>
                        <button>
                            <ChevronLeft />
                        </button>
                    </Link>
                </div>

                <div className='w-full flex justify-start items-start flex-1'>
                    <h2 className='text-[16px]'>Chats</h2>
                </div>

            </header>
            <div className="max-w-md mx-auto h-[450px] p-4 bg-white rounded-lg">

                <Input
                    icon={<Search className='items-center' />}
                    className='h-[40px] tex-[14px]'
                    placeholder='Buscar chats'
                />

                {/* Chat Items */}
                <div className="space-y-4">
                    {chats.map((chat, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-2 border-b"
                        >
                            {/* Avatar and Chat Info */}
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="h-10 w-10 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                                        {chat.avatar}
                                    </div>
                                    {chat.status === 'online' && (
                                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-white"></div>
                                    )}
                                </div>
                                <div>
                                    <Link href={`/chats/box`}>
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-medium">{chat.name}</h3>
                                            {chat.verified && (
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                            )}
                                        </div>
                                    </Link>

                                    <p className="text-xs text-gray-500 truncate">{chat.message}</p>
                                </div>
                            </div>

                            {/* Date */}
                            <span className="text-xs text-gray-400">{chat.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
};
