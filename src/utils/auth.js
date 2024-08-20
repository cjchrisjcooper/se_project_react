// src/utils/auth.js

import { BASE_URL } from "./constants";

// Specify the BASE_URL for the API.

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

// The register function accepts the necessary data as arguments,
// and sends a POST request to the given endpoint.
function register(name, password, email, avatar) {
  return request(`${BASE_URL}/signup`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ name, password, email, avatar }),
  });
}

function authorize(password, email) {
  return request(`${BASE_URL}/signin`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ password, email }),
  });
}

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export { register, authorize, request, checkResponse };
