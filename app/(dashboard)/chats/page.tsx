'use client';

import React, { useEffect, useState } from 'react';
import { Search, CheckCircle, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { getChats } from '@/actions/chats';
import { Chat } from '@/interfaces/chat';
import { format } from 'date-fns';

export default function Page() {
    const [chats, setChats] = useState<Chat[]>([]);
    const [filteredChats, setFilteredChats] = useState<Chat[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchChats = async () => {
            try {
                setIsLoading(true);
                const response = await getChats();
                setChats(response.chats);
                setFilteredChats(response.chats);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchChats();
    }, []);

    useEffect(() => {
        const filtered = chats.filter(chat => 
            chat.seller.toLowerCase().includes(filter.toLowerCase())
        );
        setFilteredChats(filtered);
    }, [filter, chats]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };

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
                    className='h-[40px] text-[14px]'
                    placeholder='Buscar chats'
                    value={filter}
                    onChange={handleFilterChange}
                />

                {isLoading ? (
                    <div className="flex items-center justify-center h-[calc(100%-56px)]">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                    </div>
                ) : filteredChats.length > 0 ? (
                    <div className="space-y-4 mt-4">
                        {filteredChats.map((chat, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-2 border-b"
                            >
                                
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="h-10 w-10 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                                            {chat.seller.charAt(0)}
                                        </div>
                                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-white"></div>
                                    </div>
                                    <div>
                                        <Link href={`/chats/${chat._id}`}>
                                            <div className="flex items-center gap-1">
                                                <h3 className="text-sm font-medium">{chat.seller}</h3>
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                            </div>
                                        </Link>
                                        <p className="text-xs text-gray-500 truncate">
                                            {chat.messages[chat.messages.length - 1].content.length > 20
                                                ? `${chat.messages[chat.messages.length - 1].content.slice(0, 20)}...`
                                                : chat.messages[chat.messages.length - 1].content}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400">{format(new Date(chat.messages[chat.messages.length - 1].timestamp), 'dd/MM/yyyy')}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-[calc(100%-56px)]">
                        <p className="text-gray-500">No chats available</p>
                    </div>
                )}
            </div>
        </>
    );
}

