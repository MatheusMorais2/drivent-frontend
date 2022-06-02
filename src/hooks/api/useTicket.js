import useAsync from '../useAsync';
import useToken from '../useToken';
import useEvent from '../api/useEvent';

import * as ticketApi from '../../services/ticketApi';

export default function useTicket() {
  const token = useToken();
  const { event } = useEvent();

  const {
    data: tickets,
    loading: ticketsLoading,
    error: ticketsError,
    act: getTickets
  } = useAsync(() => ticketApi.getAll(token, 1));

  return {
    tickets,
    ticketsLoading,
    ticketsError,
    getTickets
  };
}
