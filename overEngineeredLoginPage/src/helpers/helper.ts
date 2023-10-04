import axios from 'axios';

export const get = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const post = async (url: string, data: any) => {
  console.log(data);
  const response = await axios.post(url, data);
  return response.data;
};
