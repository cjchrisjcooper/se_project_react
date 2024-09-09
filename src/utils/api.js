import { BASE_URL } from "./constants";
class Api {
  constructor() {
    // constructor body
    this._baseUrl = BASE_URL;
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

  _request(url, options) {
    return fetch(url, options).then(this._checkValidResponse);
  }

  getClothingItems() {
    return this._request(`${this._baseUrl}/items`, {
      method: "GET",
      headers: this.headers,
    });
  }

  getUserInfo(token) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }

  addNewClothingItems({ name, weather, imageUrl }, token) {
    return this._request(`${this._baseUrl}/items`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, weather, imageUrl }),
    });
  }

  updateUserProfile({ name, avatar }, token) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, avatar }),
    });
  }
  //return this._request()
  deleteClothingItem(id, token) {
    return this._request(`${this._baseUrl}/items/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }

  likeClothingIem(id, token) {
    return this._request(`${this._baseUrl}/items/${id}/likes`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }

  unlikeClothingIem(id, token) {
    return this._request(`${this._baseUrl}/items/${id}/likes`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default Api;
