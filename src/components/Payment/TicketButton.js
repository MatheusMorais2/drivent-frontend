import styled from 'styled-components';
import * as ticketApi from '../../services/ticketApi';
import useToken from '../../hooks/useToken';
import useUserTicket from '../../hooks/api/useUserTicket';

export default function TicketButton({ type, price, id }) {
  const token = useToken();
  const { userTicket } = useUserTicket();
  return (
    <Button active={userTicket?.ticketId === id} onClick={() => ticketApi.updateUserTicket(token, id)}>
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
  border: 1px solid #CECECE;
  background-color: ${props => props.active ? '#FFEED2' : '#FFFFFF'};
  border-radius: 1rem;
  transition: all;
  &:hover{
    background-color: #FFF9F0;
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
