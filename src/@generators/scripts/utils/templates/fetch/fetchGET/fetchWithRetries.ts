/** @format */

//#region  ::: PARTIALS

const callApi = async (response: Response) => {
  if (!response.ok)
    return Promise.reject({
      message: `The service response was: ${response.status}`,
      responseBody: await tryGetResponseBody(response),
      statusCode: response.status,
    });

  return response.json();
};

const tryGetResponseBody = async (response: Response) => {
  try {
    return await response.json();
  } catch (error) {
    console.error(error);
    return error.message ?? '';
  }
};

const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time));

//#endregion

export const fetchWithRetries = async (input: RequestInfo, init?: RequestInit, numOfRetry = 3, sleepTime = 500) => {
  for (let index = 1; index <= numOfRetry; index++) {
    try {
      const response = await fetch(input, init);
      return callApi(response);
    } catch (error) {
      if (!(error instanceof TypeError)) throw error;

      const message = `A connectivity error occurred (retry ${index}/${numOfRetry})`;
      console.warn(message, { error, input });

      await sleep(sleepTime);
    }
  }

  return Promise.reject({ message: `No more retry left`, input, numOfRetry, sleepTime });
};
