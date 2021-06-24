//#region ::: IMPORT

import { AT_CIAO_UPDATE } from "./constants";

export const actionCiaoUpdate = (payload: any) => ({
  type: AT_CIAO_UPDATE,
  payload,
});
