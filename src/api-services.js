const apiFetch = (...args) => {
  let error;
  return fetch(...args)
  .then(response => {
    if(!response.ok) {
      error = { code: response.status };
      if(!response.headers.get('content-type').includes('json')) {
        error.message = response.statusText;
        return Promise.reject(error);
      }
    }
    return response.json();
  })
  .then(data => {
    if(error) {
      error.message = data.message;
      return Promise.reject(error);
    }
    return data;
  })
}

export default apiFetch;