/** @format */

import firebaseLib from 'firebase';
import { TERMINAL_PROMPT, TERMINAL_PROMPT_PATH } from '../constants/general';

export const utilityGetPrompt = (user?: firebaseLib.User): string => {
  if (!user) return TERMINAL_PROMPT;
  return `${user.email} ${TERMINAL_PROMPT_PATH}`;
};
