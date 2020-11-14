export const getCookie = (key) => {
  const cookieString = document.cookie;
  if (cookieString)
    return cookieString
      .split(";")
      .find((e) => e.startsWith(key))
      .split("=")[1];
  return null;
};

export const setCookie = (key, value, ttl) => {
  let time = new Date();
  time.setDate(time.getTime() + ttl);
  const expires = time ? `expires=${time.toUTCString()}` : "";
  document.cookie = `${key}=${value};${expires};path="/"`;
};
