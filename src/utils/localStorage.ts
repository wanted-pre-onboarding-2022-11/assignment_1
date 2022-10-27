export const ACCESS_TOKEN_KEY = "jwt";

const saveAccessToken = (accessToken: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
};

const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

const isStored = (storageKey: string) => {
  return localStorage.getItem(storageKey) !== null;
};

export { saveAccessToken, getAccessToken, isStored };
