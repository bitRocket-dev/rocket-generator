/** @format */

export const delayAsync = (duration: number): Promise<boolean> =>
  new Promise(resolve => {
    setTimeout(() => resolve(true), duration);
  });
