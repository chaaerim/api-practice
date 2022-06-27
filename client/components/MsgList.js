import MsgItem from './MsgItem';

const UserIds = ['spiderman', 'MJ'];
const getRandomUserId = () => UserIds[Math.round(Math.random())];

const msgs = Array(50)
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

const MsgList = () => (
  <ul className="messages">
    {msgs.map((msg) => (
      <MsgItem key={msg.id} {...msg} />
    ))}
  </ul>
);

export default MsgList;
