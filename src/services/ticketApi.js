import api from './api';

export async function getAll(token, eventId) {
  const response = await api.get(`/tickets/${eventId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function updateUserTicket(token, ticketId) {
  await api.put('/tickets/update/ticket', { ticketId }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
