'use strict';

class UserStorage {
  static #users = {
    id: ['mario', '정의민', '정프로'],
    psword: ['1234', '1234', '123456'],
    name: ['정의민', '정의민', '정의뮌'],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
