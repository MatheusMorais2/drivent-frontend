import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useTicket from '../../hooks/api/useTicket';
import useToken from '../../hooks/useToken';
import { getUserTicketInfo } from '../../services/userTicketApi';
import { SessionOptionalButtons } from './SessionOptionalButtons';
import TicketButton from './TicketButton';
import { Reserve } from './Reserve';

export default function SessionTicketButtons() {
  const token = useToken();
  const { tickets } = useTicket();
  const [userTicket, setUserTicket] = useState(null);
  const [att, setAtt] = useState(false);
  const [ticketId, setTicketId] = useState(userTicket?.ticketId);
  const [reserve, setReserve] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchUserTicketData() {
      const data = await getUserTicketInfo(token);
      setUserTicket(data);
      setTicketId(data.ticketId);
    }
    fetchUserTicketData();
  }, [att]);

  return (
    <>
      <SessionTitle>Primeiro, escolha sua modalidade de ingresso</SessionTitle>
      <SessionButtons>
        {tickets?.map((ticket) => {
          return (
            <TicketButton
              key={ticket.id}
              att={att}
              setAtt={setAtt}
              active={userTicket?.ticketId === ticket.id}
              id={ticket.id}
              type={ticket.type}
              price={ticket.price}
              setReserve={setReserve}
              setTotal={setTotal}
            />
          );
        })}
      </SessionButtons>
      <SessionOptionalButtons
        att={att}
        setAtt={setAtt}
        setReserve={setReserve}
        ticketId={ticketId}
        setTotal={setTotal}
      />
      <Reserve reserve={reserve} total={total} />
    </>
  );
}

const SessionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;
const SessionTitle = styled.p`
  font-size: 1.2rem;
  color: #8e8e8e;
`;
