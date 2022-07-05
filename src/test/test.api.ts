import fetch from "node-fetch";

export const testApi = () => {

  //const apiURL = 'https://jsonplaceholder.typicode.com/users';
  //const apiURL = 'http://localhost:4000/users';
  //const apiURL = 'http://localhost:5000/api/users';
  const apiURL = 'http://localhost:3004/v1/users';
  const userID = '2';
  //const userID = '7b908c8f-5603-4def-bc6d-43cf45c97471';
  // const userData = {
  //   id: 1,
  //   username: "user",
  //   age: 38,
  //   hobbies: [
  //     'Diving',
  //     'Music',
  //     'Gardening'
  //   ]
  // };

  const userData = {
    firstName: "first name",
    lastName: "last name",
    password: "118649qwe",
    email: "met91296@gmail.com",
    favouriteArtistIds: ["62aef8e2cbabce5a0bdc0a26"]
  }

  const getAllUsers = async () => {
    console.log('Endpoint: list all users GET api/users');
    fetch(apiURL)
      .then((response: { json: () => any; }) => response.json())
      .then((json: any) => console.log(json));
  }

  const getUserById = async () => {
    console.log('Endpoint: get user by Id GET api/users/id');
    fetch(apiURL + '/' + userID)
    .then(response => response.json())
    .then(json => console.log(json));
  }

  const createUser = async () => {
    console.log(`Endpoint: create user POST ${apiURL + '/register'}`);
    fetch(apiURL + '/register', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response => response.json())
    .then(json => console.log(json));
  }

  const updateUser = async () => {
    console.log('Endpoint: update user PUT api/users/id');
    fetch(apiURL + '/' + userID, {
      method: 'PUT',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response => response.json())
    .then(json => console.log(json));
  }

  const deleteUser = async () => {
    console.log(`Endpoint: delete user DELETE api/users/${userID}`);
    fetch(apiURL + '/' + userID, {
        method: 'DELETE',
    })
  }

  //getAllUsers();
  //getUserById();
  //createUser();
  //updateUser();
  //deleteUser();
}
