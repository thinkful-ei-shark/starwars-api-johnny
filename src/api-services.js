const apiFetch = {
  initFetch : function (arg) {
    return fetch(arg, {
          headers: {
            'Content-Type' : 'application/json',
            'Accept': 'application/json'
          }
        })
        .then(response => {
          if(!response.ok) {
            throw Error({ code: response.status });
          }
          return response.json();
        })
        .then(data => {
          return data;
        })
        .catch(err => console.error(err.message))
  },

  homeworldDataFetch: function(arg) {
    return fetch(arg, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if(!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(data => data)
    .catch(err => console.error(err.message))
  }

}


export default apiFetch;