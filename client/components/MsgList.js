import MsgItem from './MsgItem';
import MsgInput from './MsgInput';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import fetcher from '../fetcher';

const MsgList = () => {
  //url로 user id 넘기기
  const { query } = useRouter();
  const userId = query.userId || query.userid || '';
  const [msgs, setMsgs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const onCreate = async (text) => {
    const newMsg = await fetcher('post', '/messages', { text, userId });
    if (!newMsg) return;
    setMsgs((msgs) => [newMsg, ...msgs]);
  };

  const onUpdate = async (text, id) => {
    const newMsg = await fetcher('put', `/messages/${id}`, { text, userId });
    if (!newMsg) return;
    setMsgs((msgs) => {
      const targetIndex = msgs.findIndex((msg) => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1, newMsg);
      return newMsgs;
    });
    doneEdit();
  };

  const onDelete = async (id) => {
    const receivedId = await fetcher('delete', `/messages/${id}`, {
      params: { userId },
    });
    //recievedid가 json일 때 숫자로 형변환이 가능한 애들이기 때문에 발생하는 문제 typeof으로 출력해봐
    setMsgs((msgs) => {
      const targetIndex = msgs.findIndex((msg) => msg.id === receivedId + '');
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  };

  const doneEdit = () => setEditingId(null);

  const getMessages = async () => {
    const msgs = await fetcher('get', '/messages');
    setMsgs(msgs);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <MsgInput mutate={onCreate} />
      <ul className="messages">
        {msgs.map((msg) => (
          <MsgItem
            key={msg.id}
            {...msg}
            onUpdate={onUpdate}
            onDelete={() => onDelete(msg.id)}
            startEdit={() => setEditingId(msg.id)}
            isEditing={editingId === msg.id}
            myId={userId}
          />
        ))}
      </ul>
    </>
  );
};

export default MsgList;
