class Api {
  constructor({ baseUrl = "http://localhost:3001" }) {
    // constructor body
    this._baseUrl = baseUrl;
  }

  _checkValidResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }
}
