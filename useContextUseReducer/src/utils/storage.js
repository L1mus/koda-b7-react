export const KEYS = {
  user: "db-user",
  seasions: "db-seasion",
};

export const getUser = () => {
  const data = localStorage.getItem(KEYS.user);
  return data ? JSON.parse(data) : null;
};

export const saveUser = (data) => {
  return localStorage.setItem(KEYS.user, JSON.stringify(data));
};

export const deleteUser = () => {
  return localStorage.removeItem(KEYS.user);
};

export const getSesion = () => {
  const data = localStorage.getItem(KEYS.seasions);
  return data ? JSON.parse(data) : [];
};

export const saveSession = (data) => {
  return localStorage.setItem(KEYS.seasions, JSON.stringify(data));
};

export const deleteSession = () => {
  return localStorage.removeItem(KEYS.seasions);
};
