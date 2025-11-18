const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const apiFetch = (endpoint, options) => {
  return fetch(`${BASE_URL}${endpoint}`, options);
};
