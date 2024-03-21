const dataProvider = {
  getList: (baseUrl, resourceName) => {
    return fetch(`${baseUrl}/${resourceName}`).then((response) =>
      response.json()
    );
  },
  getOne: (baseUrl, resourceName, id) => {
    return fetch(`${baseUrl}/${resourceName}/${id}`).then((response) =>
      response.json()
    );
  },
  create: (baseUrl, resourceName, data) => {
    return fetch(`${baseUrl}/${resourceName}`, {
      method: "POST",
      body: JSON.stringify(data),
    }).then((response) => response.json());
  },
  update: (baseUrl, resourceName, id, data) => {
    return fetch(`${baseUrl}/${resourceName}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }).then((response) => response.json());
  },
  delete: (baseUrl, resourceName, id) => {
    return fetch(`${baseUrl}/${resourceName}/${id}`, {
      method: "DELETE",
    }).then((response) => response.json());
  },
};

export default dataProvider;
