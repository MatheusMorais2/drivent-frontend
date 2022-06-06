import api from './api';

export async function getUserTicketInfo(token) {
  const response = await api.get('/tickets', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function deleteUserTicket(token) {
  await api.delete('/tickets', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
