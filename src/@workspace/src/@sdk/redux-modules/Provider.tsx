/** @format */

import { FC } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore';

const store = configureStore();

interface Props {
  children: JSX.Element;
}

export const ProviderRedux: FC<Props> = ({ children }): JSX.Element => <Provider store={store}>{children}</Provider>;
