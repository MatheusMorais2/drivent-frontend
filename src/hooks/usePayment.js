import { useContext } from 'react';
import { PaymentContext } from '../contexts/PaymentContext';

export default function usePayment() {
  const paymentContext = useContext(PaymentContext);
  if (!paymentContext) {
    throw new Error('useAlert must be used inside a AlertContext Provider');
  }

  return paymentContext;
}
