export interface db {
  users: user[]
}

export interface user {
  "id": number,
  "username": string,
  "age": number,
  "hobbies": string[]
}