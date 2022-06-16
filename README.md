# node-GRUD-api
simple user interface

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```bash
$user: git clone {repository URL}
$user: cd node-GRUD-api
```

# GRUD service docs

## Endpoints:

- `Auth` (`/` route)
  - `POST /signup` - new user registration
  - `POST /signin` - user authorization
- `User` (`/` route)

  - `GET /users` - get all users
  - `GET /users/:userId` - get the user by id (ex. “/users/123”)
  - `PUT /users/:userId` - update user
  - `DELETE /users/:userId` - delete user
