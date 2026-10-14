const UserController = require("./user-controller");
const User = require("./user");

// Reinicio la instancia del userController para no acumular los usuarios entre tests
let userController;
beforeEach(() => {
  userController = new UserController();
})

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('add() should add a user that is not in the list', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  expect(userController.users).not.toContain(user);

  userController.add(user);
  expect(userController.users).toContain(user);
});

test('remove() should not remove a user if it is not in the list', () => {
  let userAvailable = new User(1234, "Santiago", "santiago@generation.org");
  let userUnavailable = new User(9999, "Juan", "juan@generation.org");

  userController.add(userAvailable);
  expect(userController.users.length).toBe(1);

  userController.remove(userUnavailable);
  expect(userController.users.length).toBe(1);
  expect(userController.users).toContain(userAvailable);
});

test('findByEmail() should find a user by email if it exists', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);

  const foundUser = userController.findByEmail(user.getEmail());
  expect(foundUser).toEqual(user);
  expect(foundUser.getId()).toBe(user.getId());
  expect(foundUser.getName()).toBe(user.getName());
  expect(foundUser.getEmail()).toBe(user.getEmail());
});

test('findByEmail() should return undefined if it does not exist', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");

  const foundUser = userController.findByEmail(user.getEmail());
  expect(foundUser).toBe(undefined);
});

test('findById() should find a user by id if it exists', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);

  const foundUser = userController.findById(user.getId());
  expect(foundUser).toEqual(user);
  expect(foundUser.getId()).toBe(user.getId());
  expect(foundUser.getName()).toBe(user.getName());
  expect(foundUser.getEmail()).toBe(user.getEmail());
});

test('findById() should return undefined if it does not exist', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");

  const foundUser = userController.findById(user.getId());
  expect(foundUser).toBe(undefined);
});