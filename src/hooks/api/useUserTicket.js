import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useUserTicket() {
  const token = useToken();
  const {
    data: userTicket,
    loading: userTicketsLoading,
    error: userTicketsError,
    act: getUserTickets
  } = useAsync(() => ticketApi.getUserTicketInfo(token));

  return {
    userTicket,
    userTicketsLoading,
    userTicketsError,
    getUserTickets
  };
}
