import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useToken from '../../../hooks/useToken';
import { getUserTicketInfo } from '../../../services/userTicketApi';

export function ChosenTicket() {
  const token = useToken();
  const [userTicket, setUserTicket] = useState(null);
  useEffect(() => {
    async function fetchUserTicketData() {
      const response = await getUserTicketInfo(token);
      setUserTicket(response);
    }
    fetchUserTicketData();
  }, []);
  return (
    <>
      <SessionTitle>Ingresso escolhido</SessionTitle>
      <Button active={true}>
        <Type>{userTicket?.Ticket.type}{userTicket?.Optional && ` + ${userTicket.Optional.type}`}</Type>
        <Price>R$ {userTicket?.PaymentDetails[0].totalValue}</Price>
      </Button>
    </>
  );
}

const SessionTitle = styled.p`
  margin-left: 0.5rem;
  font-size: 1.2rem;
  color: #8e8e8e;
`;
const Button = styled.button`
  all: unset;
  height: 9rem;
  padding: 0 2rem;
  margin: 2rem 0;
  border: 1px solid #cecece;
  background-color: ${(props) => (props.active ? '#FFEED2' : '#FFFFFF')};
  border-radius: 1rem;
  transition: all;
`;

const Type = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const Price = styled.p`
  font-size: 0.875rem;
  text-align: center;
  color: #898989;
  margin-top: 0.4rem;
`;
