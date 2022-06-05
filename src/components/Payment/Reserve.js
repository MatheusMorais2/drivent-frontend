import { insertPaymentData } from '../../services/paymentApi';
import styled from 'styled-components';
import useToken from '../../hooks/useToken';
import usePayment from '../../hooks/usePayment';

export function Reserve({ reserve, total }) {
  const token = useToken();
  const { setPayment } = usePayment();

  async function handleReservation() {
    insertPaymentData(token);
    setPayment(true);
  }

  if (reserve) {
    return (
      <>
        <SessionTitle>
          Fechado! O total ficou em <span style={{ fontWeight: 'bold' }}>R$ {total}</span>. Agora é só confirmar:
        </SessionTitle>
        <ActionButton onClick={() => handleReservation()}>RESERVAR INGRESSO</ActionButton>
      </>
    );    
  } else {
    return '';
  }
}

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
