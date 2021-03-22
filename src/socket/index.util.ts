import CryptoJS from "crypto-js";

export const idGenerator = (key: string) => {
  if (!key) key = "";
  return CryptoJS.MD5(key + new Date().getTime());
};
