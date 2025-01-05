'use client'

import ChatWithWarning from "@/components/chat/chatfinal"
import { useParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { Chat } from "@/interfaces/chat"
import { getChatById } from "@/actions/chats"

export default function ChatPage() {
  const params = useParams();
  const _id = params.id as string;
  const [chat, setChat] = useState<Chat>();

  const fetchChats = useCallback(async () => {
    try {
      const response = await getChatById(_id);
      setChat(response.chat);
    } catch (error) {
      console.log(error);
    }
  }, [_id]);

  useEffect(() => {
    fetchChats();
  }, [fetchChats]);

  return (
    <ChatWithWarning chat={chat} fetchChats={fetchChats} />
  )
}

