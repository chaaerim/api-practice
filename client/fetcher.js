import axios from 'axios';

// baseURL을 지정해줘야 그 뒤로 라우트만 적어도 가능.
axios.defaults.baseURL = 'http://localhost:8000';

const fetcher = async (method, url, ...rest) => {
  const res = await axios[method](url, ...rest);
  return res.data;
};

export default fetcher;
