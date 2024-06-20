// src/utils/auth.js

// Specify the BASE_URL for the API.
export const BASE_URL = "http://localhost:3001";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

// The register function accepts the necessary data as arguments,
// and sends a POST request to the given endpoint.
function register(name, password, email, avatar) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ name, password, email, avatar }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

function authorize(password, email) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ password, email }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

export { register, authorize };
