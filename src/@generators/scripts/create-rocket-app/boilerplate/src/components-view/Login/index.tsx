/** @format */

import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { actionUserLoginRequest } from '../../@sdk/redux-modules/auth/actions';

export const ViewLogin: FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const onClickLogin = () => dispatch(actionUserLoginRequest(true));

  return (
    <div data-cy="view-login">
      <button onClick={onClickLogin}>Login</button>
    </div>
  );
};
