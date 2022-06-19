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
}