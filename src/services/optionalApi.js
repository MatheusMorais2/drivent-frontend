import api from './api';

export async function getAll(token, ticketId) {
  const response = await api.get(`/tickets/optionals/${ticketId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function updateUserOptional(token, optionalId) {
  await api.put(
    '/tickets/update/optional',
    { optionalId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export async function getUserOptionalInfo(token, ticketId) {
  const response = await api.get(`/tickets/optionals/${ticketId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
