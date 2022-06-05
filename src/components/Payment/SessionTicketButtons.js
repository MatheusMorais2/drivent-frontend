import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useTicket from '../../hooks/api/useTicket';
import useToken from '../../hooks/useToken';
import { getUserTicketInfo } from '../../services/userTicketApi';
import { SessionOptionalButtons } from './SessionOptionalButtons';
import TicketButton from './TicketButton';
//import { insertPaymentData } from '../../services/paymentApi';
import { Reserve } from './Reserve';

export default function SessionTicketButtons() {
  const token = useToken();
  const { tickets } = useTicket();
  const [userTicket, setUserTicket] = useState(null);
  const [att, setAtt] = useState(false);
  const [ticketId, setTicketId] = useState(userTicket?.ticketId);
  const [reserve, setReserve] = useState(false);

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
            />
          );
        })}
      </SessionButtons>
      <SessionOptionalButtons att={att} setAtt={setAtt} setReserve={setReserve} ticketId={ticketId} />
      {reserve === true && <Reserve att={att} />}
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

const ActionButton = styled.button`
  all: unset;
  background-color: #e0e0e0;
  color: #000;
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  margin: 2rem 0;
  &:hover {
    cursor: pointer;
    background-color: #e4e4e4;
  }
`;
