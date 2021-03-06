# ๐ง REST API PRACTICE
REST API ํ ์ดํ๋ก์ ํธ
</br>
REST API ์ฐ์ต์ ์ํด ๊ฐ๋จํ server์ db, client ๊ตฌํ 

<br>

## client/fetcher.js

```jsx
get: axios.get(url[, config])
delete: axios.delete(url[, config])
post:axios.post(url, data[, config])
put:axios.put(url, data[, config])
```

- post์ put์ ๋ฐ์ดํฐ๋ฅผ ์๋ฐ์ดํธํ๊ฑฐ๋ ์๋ก ์จ์ผํ๋ฏ๋ก ์๋ก ๋ณ๊ฒฝํ  ๋ด์ฉ๋ค์ด ๋ด๊ฒจ์๋ ๋ฐ์ดํฐ๊ฐ ๋ฐ๋์ ์์ผํจ. </br>
->๋ฐ๋ผ์ get๊ณผ delete์ ๋นํด ๋ฉ์๋ ์์ ๋ค์ด๊ฐ์ผํ๋ data๋ผ๋ ๊ฐ์ด ํ๋ ๋ ์์. 

</br>

์ด๋ฐ ๋ ๊ฐ์ง ๊ฒฝ์ฐ๋ฅผ ๋ชจ๋ ๋์ํ๊ธฐ ์ํด 

```jsx
const res = await axios[method](url, ...rest);
```

์์ ๊ฐ์ด ์์ฑ. 

</br>
</br>

## ๋ฌดํ์คํฌ๋กค

>๋ฌดํ์คํฌ๋กค์ ์ ์ฉํด์ ๋ฉ์ธ์ง๋ฅผ ๋ค ๋ถ๋ฌ์ค๋ ๊ฒ์ด ์๋๋ผ ํ ๋ฒ์ ๋ช ๊ฐ์ฉ๋ง ๋ค๊ณ ์ค๊ฒ๋ ๊ตฌํ

</br>

MsgList.js

```jsx
return (
    <>
      {userId && <MsgInput mutate={onCreate} />}
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
            user={users[msg.userId]}
          />
        ))}
      </ul>
      <div ref={fetchMoreEl} />
    </>
```

- `<div ref={fetchMoreEl} />`๊ฐ ํ๋ฉด์์ ๋ํ๋ฌ์ ๋ ๋ค์ ๋ฐ์ดํฐ๋ฅผ ๋ถ๋ฌ ์ค๋ผ๋ ๋ป.

</br>

MsgList.js

```jsx
const MsgList = ({ smsgs, users }) => {
  //url๋ก user id ๋๊ธฐ๊ธฐ
  const { query } = useRouter();
  const userId = query.userId || query.userid || '';
  const [msgs, setMsgs] = useState(smsgs);
  const [editingId, setEditingId] = useState(null);
  const fetchMoreEl = useRef(null);
  const [hasNext, setHasNext] = useState(true);

  //fetchMoreEl์ ๋๊ฒจ๋ฐ์ ๋ฌดํ์คํฌ๋กค์ ๋ํ ํ๋จ์ ํ์์ ํ๊ณ 
  //fetchMoreEl์ด ํ๋ฉด์์ ๋ํ๋ฌ์ ๋์๋ intersection์ด true ๊ทธ๋ ์ง ์์ ๋์๋ false
  const intersecting = useInfiniteScroll(fetchMoreEl);

  ...

  const getMessages = async () => {
    const newMsgs = await fetcher('get', '/messages', {
      params: { cursor: msgs[msgs.length - 1]?.id || '' },
    });
    if (newMsgs.length === 0) {
      setHasNext(false);
      return;
    }
    setMsgs((msgs) => [...msgs, ...newMsgs]);
  };

  useEffect(() => {
    if (intersecting && hasNext) getMessages();
  }, [intersecting]);
  return (
    <>
      {userId && <MsgInput mutate={onCreate} />}
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
            user={users[msg.userId]}
          />
        ))}
      </ul>
      <div ref={fetchMoreEl} />
    </>
  );
};

export default MsgList;
```

- `const intersecting = useInfiniteScroll(fetchMoreEl);`์์ `fetchMoreEl`์ ๋๊ฒจ๋ฐ์ ๋ฌดํ์คํฌ๋กค์ ๋ํ ํ๋จ์ ํ์์ ํ๊ณ  `fetchMoreEl`์ด ํ๋ฉด์์ ๋ํ๋ฌ์ ๋์๋ `intersection`์ด ***true*** ๊ทธ๋ ์ง ์์ ๋์๋ ***false***. 
- `getMessages์์ setMsgs((msgs) => [...msgs, ...newMsgs]);` ๋ก ์ ์ด์ฃผ์ด ์๋ก ๋ค์ด์จ Msgs๋ค์ ๋ค์ ๋ถ์ฌ์ฃผ๋๋ก ์์ .
- `const [hasNext, setHasNext] = useState(true);`๋ฅผ ์ค์ ํด์ฃผ์ด ๋ฌดํ์คํฌ๋กค ์์ฒญ์ ๋ณด๋ผ์ง ๋ง์ง๋ฅผ ๊ฒฐ์ . ๋ค์ ๋ฉ์ธ์ง๊ฐ ์์ผ๋ฉด ์์ฒญ์ ๋ณด๋ด์ง ์๋๋ก ํจ.

</br>

useInfiniteScroll.js

```jsx
import { useRef, useState, useEffect, useCallback } from 'react';

const useInfiniteScroll = (targetEl) => {
  const observerRef = useRef(null);
  const [intersecting, setIntersecting] = useState(false);

  const getObserver = useCallback(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) =>
        setIntersecting(entries.some((entry) => entry.isIntersecting))
      );
    }
    return observerRef.current;
  }, [observerRef.current]);

  useEffect(() => {
    if (targetEl.current) getObserver().observe(targetEl.current);

    return () => {
      getObserver().disconnect();
    };
  }, [targetEl.current]);

  return intersecting;
};

export default useInfiniteScroll;
```

- `const getObserver = useCallback(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) =>
        setIntersecting(entries.some((entry) => entry.isIntersecting))
      );
    }`
    
    โ ์ฌ๊ธฐ์ entry์ intersectingํ๊ฒ ํ๋๋ผ๋ ์์ผ๋ฉด true๋ก ์ง์  ํ๋๋ ์์ผ๋ฉด false๋ก. 
    

- useEffect๋ก `targetEl.current`๊ฐ ์์ ๋ observeํด์ฃผ๋ฉด ๋จ.
- ๋ ์ด์ useInfinitescroll์ด ํ๋ฉด์์ ์กด์ฌํ์ง ์์ ๋์๋ ***observer๋ฅผ disconnect***.
- targetEl.current์ ***๋ณ๊ฒฝ์ด ์์ ๋์๋ง*** useEffect ์คํ
- `const getObserver = useCallback(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) =>
        setIntersecting(entries.some((entry) => entry.isIntersecting))
      );
    }`
    
    โ observerRef.current๊ฐ ์์ ๋ ๋ฃ์ด์ค. observerRef.current๊ฐ ***๋ณ๊ฒฝ๋  ๋์๋ง*** ๋ณ๊ฒฝ์ฌํญ์ ๊ฐ์ง. 
    
- getObserver๋ฅผ ์คํํ๋ฉด ์ต์ด์ ์คํํ  ๋์๋ `observerRef.current`๊ฐ์ด `null`์ด๊ธฐ ๋๋ฌธ์ intersection observer๊ฐ ์ด๊ธฐํ๊ฐ ๋๋๋ฐ ์ดํ์๋ ๋ง๋ค์ด์ง observer๊ฐ ๋ฐํ๋จ.


</br>

MsgList.js

```jsx
 const getMessages = async () => {
    const newMsgs = await fetcher('get', '/messages', {
      params: { cursor: msgs[msgs.length - 1]?.id || '' },
    });
    if (newMsgs.length === 0) {
      setHasNext(false);
      return;
    }
    setMsgs((msgs) => [...msgs, ...newMsgs]);
  };

```

- cursor๋ ๋งจ ๋ง์ง๋ง ๋ฉ์ธ์ง์ ์์ด๋๊ฐ์ ๋๊ฒจ์ค. </br>
  โ ์ต์ด์๋ ๋ฐ์ดํฐ ์์ฒด๊ฐ ์๊ธฐ ๋๋ฌธ์ cursor๊ฐ ๋น ๊ฐ์ผ๋ก ๊ฐ ์ ์๊ฒ๋ ์ค์ .


</br>

server/messages.js

```jsx
const messagesRoute = [
  {
    // GET MESSAGES
    method: 'get',
    route: '/messages',
    handler: ({ query: { cursor = '' } }, res) => {
      const msgs = getMsgs();
      const fromIndex = msgs.findIndex((msg) => msg.id === cursor) + 1;
      res.send(msgs.slice(fromIndex, fromIndex + 15));
    },
  },
```

- req์ ์ฟผ๋ฆฌ๋ฌธ์ ๋ฃ์ด์ค. `fromIndex`๋ ์ปค์์ ๋ค์ ๊ฒ๋ถํฐ ์ฐพ๋๋ก ํจ. ์ต์ด์๋ ์ปค์๊ฐ ๋น ๊ฐ์ด๋ฏ๋ก findIndex๊ฐ ***-1***์ด ๋์ฌ ๊ฒ์ด๊ณ  fromIndex๋ 0์ด ๋  ๊ฒ. 
  โ ๋ฐ๋ผ์ 0๋ฒ๋ถํฐ ๋ถ๋ฌ์ค๊ฒ ์ง..
- 15๊ฐ๋ ํ๋ฒ์ ๋ถ๋ฌ์ฌ ๊ฐ์.

</br>
</br>

## SSR

client/index.js

```jsx
import MsgList from '../components/MsgList';
import fetcher from '../fetcher';

const Home = ({ smsgs, users }) => (
  <>
    <h1>SIMPLE SNS</h1>
    <MsgList smsgs={smsgs} users={users} />
  </>
);

export const getServerSideProps = async () => {
  const smsgs = await fetcher('get', '/messages');
  const users = await fetcher('get', '/users');
  return {
    props: { smsgs, users },
  };
};

export default Home;
```

- smsgs์ users๋ฅผ ***Home props***๋ก ์ ๋ฌ & MsgList๋ก ๋ค์ ์ ๋ฌ.
- ๊ทธ๋ฌ๋ฉด Home์ ์ฒ์๋ถํฐ msgs๊ฐ ๋ค์ด์ ์์.
- ์๋ฒ์์ ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์ค๊ณ  client์์๋ ์์ฒญ์กฐ์ฐจ ๋ณด๋ด์ง ์์ ์ํ๋ก ๋ฐ๋ก ํ๋ฉด์ ๋ ๋๋ง์ด ๊ฐ๋ฅํด์ง ๊ฒ. ์คํฌ๋กค์ ๋ด๋ฆฌ๋ฉด ๊ทธ ๋ค์๋ถํฐ msgs ์์ฒญ์ด ๋ณด๋ด์ง ๊ฒ.
