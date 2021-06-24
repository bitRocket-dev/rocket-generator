/** @format */

import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';

export const useNavigation = (): { navTo: (linkTo: string) => void } => {
  const history = useHistory();

  const navTo = useCallback((linkTo: string): void => history.push(linkTo), [history]);

  return { navTo };
};
