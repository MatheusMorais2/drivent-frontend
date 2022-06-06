import { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { formatCreditCardNumber, formatCVC, formatExpirationDate } from '../../../utils/paymentUtils';
import styled from 'styled-components';

export function PaymentMethod() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focused, setFocused] = useState('');

  function handleInputChange({ target }) {
    if (target.name === 'number') {
      setNumber(formatCreditCardNumber(target.value));
    } else if (target.name === 'expiry') {
      setExpiry(formatExpirationDate(target.value));
    } else if (target.name === 'cvc') {
      setCvc(formatCVC(target.value));
    } else if (target.name === 'name') {
      setName(target.value);
    }
  };

  function handleInputFocus({ target }) {
    setFocused(target.name);
  };

  return (
    <>
      <SessionTitle>Pagamento</SessionTitle>
      <Payment>
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focused}
          name={name}
          number={number}
          placeholders={{
            name: 'SEU NOME AQUI',
          }}
          locale={{
            valid: 'Validade'
          }}
        />
        <Form>
          <FormGroup>
            <Input
              type="tel"
              name="number"
              className="form-control"
              placeholder="Número do Cartão"
              pattern="[\d| ]{16,22}"
              required
              value={number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="name"
              className="form-control"
              placeholder="Nome do Titular"
              required
              value={name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </FormGroup>
          <Row>
            <div className="col-6">
              <Input
                type="tel"
                name="expiry"
                className="form-control"
                placeholder="Validade"
                pattern="\d\d/\d\d"
                required
                value={expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <Small>Mês/Ano - 2 dígitos cada</Small>
            </div>
            <div className="col-6">
              <Input
                type="tel"
                name="cvc"
                className="form-control"
                placeholder="CVV"
                pattern="\d{3,4}"
                required
                value={cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <Small>3 ou 4 dígitos</Small>
            </div>
          </Row>
        </Form>
      </Payment>
    </>
  );
}
const Small = styled.small`
  margin-top: 0.5rem;
  color: #cecece;
`;
const Form = styled.form`
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const FormGroup = styled.div`
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  margin-bottom: 0.2rem;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
const Payment = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  & > div {
    margin: 0 1rem 1rem 0;
  }
  @media(max-width: 768px) {
    flex-direction: column;
    & > div {
    margin: 0 auto;
  }
  }
`;
const Row = styled.div`
  display: flex;
  gap: 1rem;
`;
const SessionTitle = styled.p`
  margin-left: 0.5rem;
  font-size: 1.2rem;
  color: #8e8e8e;
`;
