/* eslint-disable no-console */
const Api = ' http://localhost:3000/products';

export const dataFromServer = async () => {
  const response = await fetch(Api);

  if (!response.ok) {
    throw new Error('Error: invalid reference');
  }

  const handleResponse = await response.json();

  console.log(handleResponse);

  return handleResponse;
};

export {};
