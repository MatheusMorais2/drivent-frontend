import confirmedIcon from '../../assets/images/confirmed.png';
import styled from 'styled-components';
export function PaymentConfirmed() {
  return (
    <>
      <Title>Pagamento</Title>
      <ContainerConfirmed>
        <Img src={confirmedIcon} alt="confirmar" />
        <Text>
          <spam>Pagamento confirmado!</spam>
          <br /> Prossiga para escolha de hospedagem e atividades
        </Text>
      </ContainerConfirmed>
    </>
  );
}

const ContainerConfirmed = styled.div`
  display: flex;
  margin-top: 19px;
  align-items: center;
`;

const Img = styled.img`
  padding-right: 13px;
`;

const Text = styled.p`
  padding-right: 13px;
  font-family: 'Roboto';

  font-size: 16px;
  line-height: 19px;

  color: #454545;
  spam {
    font-weight: 700;
  }
`;

const Title = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #8e8e8e;
  margin-top: 30px;
`;
