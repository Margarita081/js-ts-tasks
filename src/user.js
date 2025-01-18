const { user } = require('chai');
class User {
  #firstName;
  #secondName;
  #age;
  
  constructor(firstName, secondName, age) {
    if (typeof firstName !== 'string' || typeof secondName !== 'string') {
      throw new Error('First name and second name must be string');
    }
    if (typeof age !== 'number') {
      throw new Error('Age must be a number');
    }
    if (firstName === null || firstName === '' || secondName === null || secondName === '') {
      throw new Error('Name can not be null');
    }
  
    this.#firstName = firstName;
    this.#secondName = secondName;
    this.#age = age;
  }
  get age() {
    return this.#age;
  }
  
    set age(newAge) {
    if (typeof newAge !== 'number') {
      throw new Error('Age must be a number');
    }
    this.#age = newAge;
  }
  
    set firstName(newFirstName) {
      if (typeof newFirstName !== 'string') {
        throw new Error('First name must be a string');
      }
      this.#firstName = newFirstName;
    }
  
      set secondName(newSecondName){
        if (typeof newSecondName !== 'string') {
          throw new Error('Second name must be a string');
      }
      this.#secondName = newSecondName;
    }
  
      get name() {
          return `${this.#firstName} ${this.#secondName}`;
      }
    
      introduce() {
        return `My name is ${this.name}, I'm ${this.#age}`;
      }
  
      celebrateBirthday() {
        this.age++;
      }
  
  }
/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;


/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  let currentUser = new User(firstName, secondName, age);
  return currentUser;

};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  return data.map(item => new User(item.firstName, item.secondName, item.age))  

  };
  


/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<User>} users
 * @param {number} age
 * @returns {Array<User>}
 */
module.exports.findUsersByAge = function (users, age) {
  return users.filter(user => user.age === age);

};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return function(users) {
    return users.sort((a, b) => TestUtils.compare(a, b));

};
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  users.forEach((user, index) => {
    if (index % 2 !== 0){
      user.celebrateBirthday();
    }
  });

  return users;
};
