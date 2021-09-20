import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { StreamChat } from 'stream-chat'
import {
    Chat, Channel, Window, ChannelHeader, MessageList, MessageInput, Thread
} from 'stream-chat-react'



export default function ChatRooms() {
    const history = useHistory()

    const idUser = 1
    const client = StreamChat.getInstance('4zhahvr4har5', 'qh2vyhx4ruu3sgkv3wws6v72jz82swbkjzxxurjwq7yd49r8xgbsxh2gqk74nkav')
    client.connectUser({
        user_id: idUser
    }, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSJ9.ZDF13b_LjvN0y9bYP7EkQkg1D1PmRpUwtRtXr5ORXyA')

    const channel = client.channel('messaging', {
        image: 'https://i.ibb.co/G9TWJY9/Batch-14-Ahmad-Azzam-S.png',
        name: 'Testing Channel',
        members: ['Customer 1', 'Customer 2'],
    });

    useEffect(() => {
        if (!localStorage.getItem('access_token')) {
            history.push('/login')
        }
    })


    return (
        <>
            <Chat client={client}>
                <Channel channel={channel}>
                    <Window>
                        <ChannelHeader />
                        <MessageList />
                        <MessageInput />
                    </Window>
                    <Thread />
                </Channel>
            </Chat>
        </>
    )
}