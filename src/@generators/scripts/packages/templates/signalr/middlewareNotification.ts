/** @format */

import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Dispatch, AnyAction } from 'redux';

const URL = `------`;
const ON_MESSAGE = 'ReceiveMessage';
const AT_NOTIFICATION_RECEIVED = 'NOTIFICATION_RECEIVED';
const AT_CONNECTION_CONNECT = 'INIT_CONNECTION';
const AT_CONNECTION_STOP = 'STOP_CONNECTION';

let connection: HubConnection | null = null;

const onConnectionStart = async (connection: HubConnection): Promise<void> => {
  try {
    await connection.start();
  } catch (error) {
    return console.error('SignalR Connection Error: ', error);
  }
};

const onInitConnection = (dispatch: Dispatch, token: string): void => {
  connection = new HubConnectionBuilder()
    .withUrl(URL, { accessTokenFactory: (): string => token })
    .withAutomaticReconnect()
    .build();

  connection.on(ON_MESSAGE, (notification: any) => dispatch({ type: AT_NOTIFICATION_RECEIVED, payload: notification }));
  onConnectionStart(connection);
};

export const middlewareNotification =
  ({ dispatch }: { dispatch: Dispatch }) =>
  (next: (action: AnyAction) => void) =>
  async (action: AnyAction): Promise<void> => {
    // HERE NEED TO PASS TOKEN on action.payload
    if (action.type === AT_CONNECTION_CONNECT) onInitConnection(dispatch, action.payload);
    if (action.type === AT_CONNECTION_STOP && connection) connection.stop();
    return next(action);
  };
