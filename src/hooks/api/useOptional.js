import useAsync from '../useAsync';
import useToken from '../useToken';

import * as optionalApi from '../../services/optionalApi';
// import useUserTicket from './useUserTicket';

// import { useContext } from 'react';
// import EventInfoContext from '../../contexts/EventInfoContext';

export default function useOptional() {
  const token = useToken();
  // const { eventInfo } = useContext(EventInfoContext);
  // const { userTicket } = useUserTicket();
  const {
    data: optionals,
    loading: optionalsLoading,
    error: optionalsError,
    act: getOptionals,
  } = useAsync(() => optionalApi.getAll(token, 1));

  return {
    optionals,
    optionalsLoading,
    optionalsError,
    getOptionals,
  };
}
