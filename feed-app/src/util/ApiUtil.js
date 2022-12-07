import axios from "axios";
import { API_BASE_URL, ACCESS_TOKEN } from "../common/constants";

const request = options => {
  const headers = new Headers();

  if (options.setContentType !== false) {
    headers.append("Content-Type", "application/json");
  }

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      "Authorization",
      "Bearer " + localStorage.getItem(ACCESS_TOKEN)
    );
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export const login = (loginRequest) => {
  return request({
    url: API_BASE_URL + "/auth/signin",
    method: "POST",
    body: JSON.stringify(loginRequest),
  });
};

// import axios from "axios";
// import { API_BASE_URL } from "../common/constants";
const frameToken = (token) => `Bearer ${token}`;

export const loginApi = async (username, password) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/user/login`;
    const apiResponse = await axios.post(url, { username, password });
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (e) {
    console.log(e);
  } finally {
    return response;
  }
};

export const signUpApi = async (
  username,
  name,
  emailID,
  phoneNumber,
  password
) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/user/signup`;
    const apiResponse = await axios.post(url, {
      username,
      name,
      emailID,
      phoneNumber,
      password,
    });
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    return response;
  }
};

export const getFeedsApi = async (token, excludeUsername) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/Posts`;
    const apiResponse = await axios.get(url, {
      headers: { Authorization: frameToken(token) },
      params: { excludeUsername },
    });
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    return response;
  }
};

export const addFeedApi = async (token, username, post, imageUrl) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/Posts/username/${username}`;
    const apiResponse = await axios.post(
      url,
      { post, imageUrl },
      {
        headers: { Authorization: frameToken(token) },
      }
    );
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    return response;
  }
};


export const getMyFeedsApi = async (token, username) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/Posts/username/${username}`;
    const apiResponse = await axios.get(url, {
      headers: { Authorization: frameToken(token) },
    });
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    return response;
  }
};