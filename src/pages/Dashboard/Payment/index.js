import styled from 'styled-components';
import TicketButton from '../../../components/Payment/TicketButton';
import useEnrollment from '../../../hooks/api/useEnrollment';
import useTicket from '../../../hooks/api/useTicket';
import useOptional from '../../../hooks/api/useOptional';
import OptionalButton from '../../../components/Payment/OptionalButton';
import useToken from '../../../hooks/useToken';
import { insertPaymentData } from '../../../services/paymentApi';

export default function Payment() {
  const { enrollment } = useEnrollment();
  const { tickets } = useTicket();
  const { optionals } = useOptional();
  const token = useToken();
  return (
    <PaymentContainer>
      {enrollment ? (
        <>
          <Title>Ingresso e Pagamento</Title>
          <SessionTitle>Primeiro, escolha sua modalidade de ingresso</SessionTitle>
          <SessionButtons>
            {tickets?.map((ticket) => {
              return <TicketButton key={ticket.id} id={ticket.id} type={ticket.type} price={ticket.price} />;
            })}
          </SessionButtons>

          {/* {optionals && ( */}
          <SessionButtons>
            {optionals?.map((optional) => {
              return <OptionalButton key={optional.id} id={optional.id} type={optional.type} price={optional.price} />;
            })}
          </SessionButtons>
          {/* )} */}

          {/* componentes criados mas podem apagar \/ */}
          <SessionTitle>
            Fechado! O total ficou em <span style={{ fontWeight: 'bold' }}>R$ 100</span>. Agora é só confirmar:
          </SessionTitle>
          <ActionButton onClick={() => insertPaymentData(token)}>RESERVAR INGRESSO</ActionButton>
          {/* componentes criados mas podem apagar /\ */}
        </>
      ) : (
        <AlertContainer>
          <p>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</p>
        </AlertContainer>
      )}
    </PaymentContainer>
  );
}

const Title = styled.p`
  font-size: 2.1rem;
  margin-bottom: 3rem;
`;
const SessionTitle = styled.p`
  font-size: 1.2rem;
  color: #8e8e8e;
`;
const SessionButtons = styled.div`
  display: flex;
  gap: 1rem;
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
const AlertContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  & p {
    max-width: 30rem;
    color: #8e8e8e;
    font-size: 1.25rem;
  }
`;
const PaymentContainer = styled.div`
  width: 100%;
  height: 100%;
`;
