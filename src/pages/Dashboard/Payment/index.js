import styled from 'styled-components';
import useEnrollment from '../../../hooks/api/useEnrollment';
import usePayment from '../../../hooks/usePayment';
import { PaymentPage } from './Payment';
import { Tickets } from './Tickets';

export default function Payment() {
  const { enrollment, enrollmentLoading } = useEnrollment();
  const { payment } = usePayment();

  if (enrollmentLoading) {
    return 'loading...';
  }
  return (
    <PaymentContainer>
      {enrollment ? (
        <>
          <Title>Ingresso e Pagamento</Title>
          {payment ? <PaymentPage /> : <Tickets />}
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
