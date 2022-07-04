# 🧐 REST API PRACTICE
REST API 토이프로젝트
</br>
REST API 연습을 위해 간단한 server와 db, client 구현 

<br>

## client/fetcher.js

```jsx
get: axios.get(url[, config])
delete: axios.delete(url[, config])
post:axios.post(url, data[, config])
put:axios.put(url, data[, config])
```

- post와 put은 데이터를 업데이트하거나 새로 써야하므로 새로 변경할 내용들이 담겨있는 데이터가 반드시 와야함. </br>
->따라서 get과 delete에 비해 메소드 안에 들어가야하는 data라는 값이 하나 더 있음. 

</br>

이런 두 가지 경우를 모두 대응하기 위해 

```jsx
const res = await axios[method](url, ...rest);
```

위와 같이 작성. 

</br>
</br>

## 무한스크롤

>무한스크롤을 적용해서 메세지를 다 불러오는 것이 아니라 한 번에 몇 개씩만 들고오게끔 구현

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

- `<div ref={fetchMoreEl} />`가 화면상에 나타났을 때 다음 데이터를 불러 오라는 뜻.

</br>

MsgList.js

```jsx
const MsgList = ({ smsgs, users }) => {
  //url로 user id 넘기기
  const { query } = useRouter();
  const userId = query.userId || query.userid || '';
  const [msgs, setMsgs] = useState(smsgs);
  const [editingId, setEditingId] = useState(null);
  const fetchMoreEl = useRef(null);
  const [hasNext, setHasNext] = useState(true);

  //fetchMoreEl을 넘겨받아 무한스크롤에 대한 판단을 훅에서 하고
  //fetchMoreEl이 화면상에 나타났을 때에는 intersection이 true 그렇지 않을 때에는 false
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

- `const intersecting = useInfiniteScroll(fetchMoreEl);`에서 `fetchMoreEl`을 넘겨받아 무한스크롤에 대한 판단을 훅에서 하고 `fetchMoreEl`이 화면상에 나타났을 때에는 `intersection`이 ***true*** 그렇지 않을 때에는 ***false***. 
- `getMessages에서 setMsgs((msgs) => [...msgs, ...newMsgs]);` 로 적어주어 새로 들어온 Msgs들을 뒤에 붙여주도록 수정.
- `const [hasNext, setHasNext] = useState(true);`를 설정해주어 무한스크롤 요청을 보낼지 말지를 결정. 다음 메세지가 없으면 요청을 보내지 않도록 함.

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
    
    → 여기서 entry에 intersecting한게 하나라도 있으면 true로 지정 하나도 없으면 false로. 
    

- useEffect로 `targetEl.current`가 있을 때 observe해주면 됨.
- 더 이상 useInfinitescroll이 화면상에 존재하지 않을 때에는 ***observer를 disconnect***.
- targetEl.current에 ***변경이 있을 때에만*** useEffect 실행
- `const getObserver = useCallback(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) =>
        setIntersecting(entries.some((entry) => entry.isIntersecting))
      );
    }`
    
    → observerRef.current가 없을 때 넣어줌. observerRef.current가 ***변경될 때에만*** 변경사항을 감지. 
    
- getObserver를 실행하면 최초에 실행할 때에는 `observerRef.current`값이 `null`이기 때문에 intersection observer가 초기화가 되는데 이후에는 만들어진 observer가 반환됨.


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

- cursor는 맨 마지막 메세지의 아이디값을 넘겨줌. </br>
  → 최초에는 데이터 자체가 없기 때문에 cursor가 빈 값으로 갈 수 있게끔 설정.


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

- req에 쿼리문을 넣어줌. `fromIndex`는 커서의 다음 것부터 찾도록 함. 최초에는 커서가 빈 값이므로 findIndex가 ***-1***이 나올 것이고 fromIndex는 0이 될 것. 
  → 따라서 0번부터 불러오겠지..
- 15개는 한번에 불러올 개수.

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

- smsgs와 users를 ***Home props***로 전달 & MsgList로 다시 전달.
- 그러면 Home에 처음부터 msgs가 들어와 있음.
- 서버에서 데이터를 받아오고 client에서는 요청조차 보내지 않은 상태로 바로 화면에 렌더링이 가능해진 것. 스크롤을 내리면 그 다음부터 msgs 요청이 보내질 것.
