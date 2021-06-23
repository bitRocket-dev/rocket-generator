//#region ::: IMPORT
import { AT_CIAO_CREATE_REQUEST } from "./constants";

export const actionCiaoCreateRequest = (payload: any) => ({
  type: AT_CIAO_CREATE_REQUEST,
  payload,
});
