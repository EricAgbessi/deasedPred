const dev = {
  API_ENDPOINT_URL: "http://127.0.0.1:5000",
  client_id: "98adcd26-585a-4474-8dc1-16babf67bb31",
  client_secret: "fVpiBcAfyM8jQe6yCNTR5jeBEuVMQtm7BWYxJ5WU",
};

const prod = {
  API_ENDPOINT_URL: "https://api.prod.com",
  client_id: "98adcd26-585a-4474-8dc1-16babf67bb31",
  client_secret: "fVpiBcAfyM8jQe6yCNTR5jeBEuVMQtm7BWYxJ5WU",
};

const test = {
  API_ENDPOINT_URL: "https://api.test.com",
  client_id: "98adcd26-585a-4474-8dc1-16babf67bb31",
  client_secret: "fVpiBcAfyM8jQe6yCNTR5jeBEuVMQtm7BWYxJ5WU",
};

const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case "development":
      return dev;
    case "production":
      return prod;
    case "test":
      return test;
    default:
      break;
  }
};

export const env = getEnv();
