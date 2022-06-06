import { PaymentMethod } from './PaymentMethod';
import { PaymentConfirmed } from '../../../components/Payment/PaymentConfirmed';
import { ChosenTicket } from './ChosenTicket';
import { useEffect, useState } from 'react';
import { getPaymentData } from '../../../services/paymentApi';
import useToken from '../../../hooks/useToken';

export function PaymentPage() {
  const token = useToken();
  const [isPaid, setIsPaid] = useState(false);
  const [att, setAtt] = useState(false);

  async function getIsPaid() {
    const response = await getPaymentData(token);
    setIsPaid(response.isPaid);
  }

  useEffect(() => {
    getIsPaid();
  }, [att]);

  return (
    <>
      <ChosenTicket />
      {isPaid ? <PaymentConfirmed /> : <PaymentMethod att={att} setAtt={setAtt} />}
    </>
  );
}
