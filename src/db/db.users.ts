import { userModel } from "../models/models";

export const dbUsers: userModel[] = [
  {
    "id": 1,
    "username": "admin",
    "age": 25,
    "hobbies": [
      'Volleyball',
      'Travel',
      'Watching movies'
    ]
  },
  {
    "id": 2,
    "username": "user",
    "age": 30,
    "hobbies": [
      'Diving',
      'Music',
      'Gardening'
    ]
  }
]
