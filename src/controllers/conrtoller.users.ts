import { dbUsers } from '../db/db.users.js';
import { userModel } from '../models/models.js';

export class ControllerUser {

  async getUsers () { // getting all users
    return new Promise((resolve, reject) => resolve(dbUsers));
  }

  async getUser(id: number) { // getting a single user

    return new Promise((resolve, reject) => {
      
      const user = dbUsers.find((user: userModel) => user.id === parseInt(String(id)));

      if (user) {
          resolve(user);
      } else {
          reject(`User with id ${id} not found `);
      }
    });
  }

  async createUser(user: userModel) {
    return new Promise((resolve, _) => {
      // create a user, with random id and data sent
      const newUser = {
//            id: String(Math.floor(4 + Math.random() * 10)),
          ...user,
      };

      // return the new created user
      resolve(newUser);
    });
  }

   // updating user
  async updateUser(id: number) {
    return new Promise((resolve, reject) => {
      // get the todo.
      const user = dbUsers.find((user) => user.id === parseInt(String(id)));
      // if no todo, return an error
      if (!user) {
          reject(`User with id ${id} not found`);
      }
      //else, update it by setting completed to true
//        todo["completed"] = true;
      // return the updated todo
      resolve(user);
    });
  }

  // deleting a todo
  async deleteUser(id: number) {
    return new Promise((resolve, reject) => {
        // get the todo
        const user = dbUsers.find((user) => user.id === parseInt(String(id)));
        // if no todo, return an error
        if (!user) {
            reject(`User with id ${id} not found`);
        }
        // else, return a success message
        resolve(`User deleted successfully`);
    });
  }
}
