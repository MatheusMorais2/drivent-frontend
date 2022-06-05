import styled from 'styled-components';
import * as ticketApi from '../../services/ticketApi';
import useToken from '../../hooks/useToken';
import { useEffect } from 'react';

export default function TicketButton({ active, type, price, id, att, setAtt, setReserve, setTotal }) {
  const token = useToken();

  useEffect(() => {
    if (type === 'Online' && active) {
      setReserve(true);
      setTotal(100);
    } 
  }, [active]);

  async function handleUpdateUserTicket(ticketId) {
    await ticketApi.updateUserTicket(token, ticketId);
    setAtt(!att);
    if (type === 'Online') {
      setReserve(true);
      setTotal(100);
    } else {
      setReserve(false);
    }
  }
  return (
    <Button active={active} onClick={() => handleUpdateUserTicket(id)}>
      <Type>{type}</Type>
      <Price>R$ {price}</Price>
    </Button>
  );
}

const Button = styled.button`
  all: unset;
  width: 9rem;
  height: 9rem;
  margin: 2rem 0;
  border: 1px solid #cecece;
  background-color: ${(props) => (props.active ? '#FFEED2' : '#FFFFFF')};
  border-radius: 1rem;
  transition: all;
  &:hover {
    background-color: ${(props) => (props.active ? '#FFEED2' : '#fff9f0')};
    cursor: pointer;
  }
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
