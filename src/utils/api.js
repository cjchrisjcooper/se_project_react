class Api {
  constructor({ baseUrl = "http://localhost:3001", headers }) {
    // constructor body
    this._baseUrl = baseUrl;
    this.headers = {
      "Content-Type": "application/json",
    };
  }

  _checkValidResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  getClothingItems() {
    return fetch(`${this._baseUrl}/items`, {
      method: "GET",
      headers: this.headers,
    }).then(this._checkValidResponse);
  }

  getUserInfo(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkValidResponse);
  }

  addNewClothingItems({ name, weather, imageUrl }) {
    return fetch(`${this._baseUrl}/items`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ name, weather, imageUrl }),
    }).then(this._checkValidResponse);
  }

  deleteClothingItem(id) {
    return fetch(`${this._baseUrl}/items/${id}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._checkValidResponse);
  }
}

export default Api;
