import api from './api';

export async function insertPaymentData(token) {
  await api.post(
    '/payment',
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export async function getPaymentData(token) {
  const response = await api.get('/payment', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
