# Chapter II

# Desafio 01 e 02 - Introdução ao SOLID e Documentando com Swagger

## :rocket: Project

I - Create an application for listing and registering users using SOLID.

II - Documentation of routes using Swagger.


### Routes
- [x] POST /users
- [x] PATCH /users/:user_id/admin
- [x] GET /users
- [x] GET /users/:user_id

### Specification

#### Model tests
- [x] Should be able to create an user with all props

#### Repository tests 
- [x] Should be able to create new users
- [x] Should be able to list all users
- [x] Should be able to find user by ID
- [x] Should be able to find user by e-mail address
- [x] Should be able to turn an user as admin

##### UseCases tests
- [x] Should be able to create new users
- [x] Should not be able to create new users when email is already taken
- [x] Should be able to turn an user as admin
- [x] Should not be able to turn a non existing user as admin
- [x] Should be able to get user profile by ID
- [x] Should not be able to show profile of a non existing user
- [x] Should be able to list all users
- [x] Should not be able to a non admin user get list of all users
- [x] Should not be able to a non existing user get list of all users

## :computer: Install ##

```bash
# Clone this repository
$ git clone https://github.com/ThiLourenco/Node-introducao-ao-SOLID

# Access folder
$ cd Node-introducao-ao-SOLID

# Install dependencies
$ yarn ou yarn install

# Run application
$ yarn dev

# Run tests
$ yarn test

# Start server
access http://localhost:3333

# Docs with Swagger
access http://localhost:3333/api-docs/
```