/** @format */

import { watcherAuth } from './auth/watcher';

export const watchers: (() => Generator)[] = [watcherAuth];
