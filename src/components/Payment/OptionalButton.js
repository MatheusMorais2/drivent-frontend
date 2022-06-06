import styled from 'styled-components';

import * as optionalApi from '../../services/optionalApi';
import useToken from '../../hooks/useToken';
import { useEffect } from 'react';

export default function OptionalButton({ active, type, price, id, att, setAtt, setReserve, setTotal, total }) {
  const token = useToken();

  useEffect(() => {
    if (active) {
      setReserve(true);
    }
    if (type === 'Com Hotel' && active) {
      setTotal(total + price);
    } else {
      setTotal(total + price);
    }
  }, []);

  async function handleUpdateUserTicket(optionalId) {
    await optionalApi.updateUserOptional(token, optionalId);
    setAtt(!att);
    setReserve(true);
    if (type === 'Com Hotel') {
      setTotal(600);
    } else {
      setTotal(250);
    }
  }
  return (
    <Button active={active} onClick={() => handleUpdateUserTicket(id)}>
      <Type>{type}</Type>
      <Price>+ R$ {price}</Price>
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
