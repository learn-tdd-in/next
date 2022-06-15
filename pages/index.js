import {useState} from 'react';
import MessageList from '../components/MessageList';
import NewMessageForm from '../components/NewMessageForm';

export default function Home() {
  const [messages, setMessages] = useState([]);
  function handleSend(newMessage) {
    setMessages([newMessage, ...messages]);
  }

  return (
    <>
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </>
  );
}
