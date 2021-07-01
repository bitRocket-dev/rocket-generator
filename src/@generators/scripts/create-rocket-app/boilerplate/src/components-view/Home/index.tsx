/** @format */

import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { actionUserLogoutRequest } from '../../@sdk/redux-modules/auth/actions';

export const ViewHome: FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const onClickLogout = () => dispatch(actionUserLogoutRequest(false));

  return (
    <div data-cy="view-home">
      <h1 style={{ fontSize: 70, width: '100%', textAlign: 'center', fontStyle: 'oblique', fontFamily: 'fantasy' }}>
        Home
      </h1>
      <button onClick={onClickLogout}>logout</button>
    </div>
  );
};
