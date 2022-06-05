import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useToken from '../../hooks/useToken';
import { getUserOptionalInfo } from '../../services/optionalApi';
import { getUserTicketInfo } from '../../services/userTicketApi';
import OptionalButton from './OptionalButton';

export function SessionOptionalButtons({ ticketId }) {
  const token = useToken();
  const [userTicket, setUserTicket] = useState(null);
  const [att, setAtt] = useState(false);
  const [optionals, setOptionals] = useState(null);

  useEffect(() => {
    async function fetchUserTicketData() {
      const userTicketData = await getUserTicketInfo(token);
      setUserTicket(userTicketData);

      if (ticketId) {
        const optionalsData = await getUserOptionalInfo(token, ticketId);
        setOptionals(optionalsData);
      }
    }
    fetchUserTicketData();
  }, [att, ticketId]);

  if (optionals && optionals.length > 0) {
    return (
      <>
        <SessionTitle>Ótimo! Agora escolha sua modalidade de hospedagem</SessionTitle>
        <SessionButtons>
          {optionals?.map(optional => {
            return <OptionalButton key={optional.id} att={att} setAtt={setAtt} active={userTicket?.optionalId === optional.id} id={optional.id} type={optional.type} price={optional.price} />;
          })}
        </SessionButtons>
      </>
    );
  } else {
    return '';
  }
}

const SessionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;
const SessionTitle = styled.p`
  font-size: 1.2rem;
  color: #8e8e8e;
`;
