interface IcheckErrorOrigin {
  response: {
    data: {
      message: string | string[];
    };
  };
}

export const checkErrorOrigin = (e: IcheckErrorOrigin): string => {
  const { response } = e;

  const message = Array.isArray(response?.data.message)
    ? response.data.message[0]
    : response?.data.message;

  return message;
};
