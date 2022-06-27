import MsgItem from './MsgItem';
import MsgInput from './MsgInput';
import { useState } from 'react';

const UserIds = ['spiderman', 'MJ'];
const getRandomUserId = () => UserIds[Math.round(Math.random())];

const originalMsgs = Array(50)
  .fill(0)
  .map((_, i) => ({
    id: i + 1,
    userId: getRandomUserId(),
    timestamp: 1234567890123 + i * 1000 * 60,
    text: `${i + 1} test message`,
  }))
  .reverse();

// const msgs = [
//   { id: 1, userId: getRandomUserId(), timestamp: 1234567890123, text: '' },
// ];

const MsgList = () => {
  const [msgs, setMsgs] = useState(originalMsgs);
  const onCreate = (text) => {
    const newMsg = {
      id: msgs.length + 1,
      userId: getRandomUserId(),
      timestamp: Date.now(),
      text: `${msgs.length + 1} ${text}`,
    };
    setMsgs((msgs) => [newMsg, ...msgs]);
    console.log(msgs);
  };
  return (
    <>
      <MsgInput mutate={onCreate} />
      <ul className="messages">
        {msgs.map((msg) => (
          <MsgItem key={msg.id} {...msg} />
        ))}
      </ul>
    </>
  );
};

export default MsgList;
