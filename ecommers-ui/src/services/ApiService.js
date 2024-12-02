import axios from "axios";

// Set the base URL for the API
axios.defaults.baseURL = "http://localhost:4000";

// API Service Calls
async function post(url, data = null) {
  const config = {
    url,
    method: "post",
  };
  if (data) {
    config.data = data;
  }
  const result = await axios(config);
  return result;
}

async function get(url) {
  const config = {
    url,
    method: "get",
  };
  const result = await axios(config);
  return result;
}

async function put(url, data = null) {
  const config = {
    url,
    method: "put",
  };
  if (data) {
    config.data = data;
  }
  const result = await axios(config);
  return result;
}

async function deleteCall(url) {
  const config = {
    url,
    method: "delete",
  };
  const result = await axios(config);
  return result;
}

const ApiService = {
  post,
  get,
  put,
  deleteCall,
};

export default ApiService;

// API URLs
export const ApiUrls = {
  GetUsers: "/users",
  GetUser: (id) => `/users/${id}`,
  CreateUser: "/users",
  UpdateUser: (id) => `/users/${id}`,
  DeleteUser: (id) => `/users/${id}`,

  GetOrders: "/orders",
};
