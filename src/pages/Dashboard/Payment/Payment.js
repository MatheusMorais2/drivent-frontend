import { PaymentMethod } from './PaymentMethod';
import { PaymentConfirmed } from '../../../components/Payment/PaymentConfirmed';

export function PaymentPage() {
  return (
    <>
      <PaymentMethod />
      <PaymentConfirmed />
    </>
  );
}
