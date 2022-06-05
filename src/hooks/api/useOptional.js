import useAsync from '../useAsync';
import useToken from '../useToken';

import * as optionalApi from '../../services/optionalApi';

export default function useOptional(ticketId) {
  const token = useToken();
  const {
    data: optionals,
    loading: optionalsLoading,
    error: optionalsError,
    act: getOptionals,
  } = useAsync(() => optionalApi.getAll(token, ticketId));

  return {
    optionals,
    optionalsLoading,
    optionalsError,
    getOptionals,
  };
}
