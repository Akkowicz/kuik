class Kuik {
  static async get(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  static async post(url, data) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const resData = await res.json();
    return resData;
  }

  static async put(url, data) {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const resData = await res.json();
    return resData;
  }

  static async delete(url) {
    await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const resData = 'Resource Deleted.';
    return resData;
  }
}

