const apiFetch = async (arg) => {
  let error;
  return await fetch(arg, {
    headers: {
      'Content-Type' : 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if(!response.ok) {
      error = { code: response.status };
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
      if(error) {
      error.message = data.message;
      return Promise.reject(error);
    }
    return data;
  })
}



export default apiFetch;