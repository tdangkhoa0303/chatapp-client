export const getCookie = (key) => {
  const cookieString = document.cookie;
  if (cookieString)
    return cookieString
      .split(";")
      .find((e) => e.startsWith(key))
      .split("=")[1];
  return null;
};
