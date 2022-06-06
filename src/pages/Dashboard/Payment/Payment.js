import { PaymentMethod } from './PaymentMethod';
import { PaymentConfirmed } from '../../../components/Payment/PaymentConfirmed';
import { ChosenTicket } from './ChosenTicket';

export function PaymentPage() {
  return (
    <>
      <ChosenTicket />
      <PaymentMethod />
      <PaymentConfirmed />
    </>
  );
}
