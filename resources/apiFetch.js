import config from './config';

const get = async url => {
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const resJSON = await res.json();
    return resJSON;
  } catch (error) {
    console.error('apiFetch get error', error);
  }
};

const post = async (url, body) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const resJSON = await res.json();

    return resJSON;
  } catch (error) {
    console.error('apiFetch post error', error);
  }
};

export default {
  get,
  post,
};
