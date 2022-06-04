import api from './api';

export async function insertPaymentData(token) {
  await api.post('/payment', {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
