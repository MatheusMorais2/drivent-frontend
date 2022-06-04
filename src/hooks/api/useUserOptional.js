import useAsync from '../useAsync';
import useToken from '../useToken';

import * as optionalApi from '../../services/optionalApi';

export default function useUserOpitonal() {
  const token = useToken();
  const {
    data: userOptionals,
    loading: userOptionalsLoading,
    error: userOptionalsError,
    act: getUserOptionals,
  } = useAsync(() => optionalApi.getUserOptionalInfo(token));

  return {
    userOptionals,
    userOptionalsLoading,
    userOptionalsError,
    getUserOptionals,
  };
}
