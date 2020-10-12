const apiFetch = async (...args) => {
  let error;
  return await fetch(...args)
  .then(response => {
    if(!response.ok) {
      error = { code: response.status };
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