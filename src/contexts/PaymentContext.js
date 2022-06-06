import { createContext, useState } from 'react';

export const PaymentContext = createContext(null);

export function PaymentProvider({ children }) {
  const [payment, setPayment] = useState(false);
  
  return (
    <PaymentContext.Provider value={{ payment, setPayment }}>
      {children}
    </PaymentContext.Provider>
  );
}
