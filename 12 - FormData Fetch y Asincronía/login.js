export default (() => {
  
  let login = {
    email: "carlossedagambin@gmail.com",
    password: "password"
  }

  fetch('http://192.168.1.16:8080/api/auth/users/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(login)
  }).then(response => {
    if (response.status === 500 || response.status === 422) {
      throw response.json()
    }

    if (response.status === 200) { 
      return response.json();
    }
  }).then(data => {
    sessionStorage.setItem('accessToken', data.accessToken);
  }).catch(error => {
    console.log(error);
  });

})();