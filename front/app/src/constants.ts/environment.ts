const getEnv = (key: string) => {
  const env = process.env[`VUE_APP_${key}`];
  if (!env) throw new Error(`Missing variable ${key}`);
  else return env;
};

export const apiEndpoint = getEnv("API_ENDPOINT");
