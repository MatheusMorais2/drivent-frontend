import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

import { useContext } from 'react';
import EventInfoContext from '../../contexts/EventInfoContext';

export default function useTicket(eventId) {
  const token = useToken();
  const { eventInfo } = useContext(EventInfoContext);
  const {
    data: tickets,
    loading: ticketsLoading,
    error: ticketsError,
    act: getTickets,
  } = useAsync(() => ticketApi.getAll(token, eventInfo.id));

  return {
    tickets,
    ticketsLoading,
    ticketsError,
    getTickets,
  };
}
