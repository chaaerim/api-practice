import fs from 'fs';
import { resolve } from 'path';

const basePath = resolve();

const filenames = {
  messages: resolve(basePath, 'src/db/messages.json'),
  users: resolve(basePath, 'src/db/users.json'),
};

export const readDB = (target) => {
  try {
    //인코딩 명시하지 않으면 오류가 발생할 수 있음.
    return JSON.parse(fs.readFileSync(filenames[target], 'utf-8'));
  } catch (err) {
    console.error(err);
  }
};

export const writeDB = (target, data) => {
  try {
    return fs.writeFileSync(filenames[target], JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};
