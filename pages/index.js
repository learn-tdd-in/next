import NewMessageForm from '../components/NewMessageForm';

export default function Home() {
  function handleSend() {}

  return <NewMessageForm onSend={handleSend} />;
}
