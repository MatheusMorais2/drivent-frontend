import api from './api';

export async function getAll(token, eventId) {
  const response = await api.get(`/tickets/optionals/${eventId}`, {
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

export async function getUserOptionalInfo(token) {
  const response = await api.get('/tickets/optionals', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
