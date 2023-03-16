async function getAllUsers() {
  console.log('get all users');
  // TODO: implement this

  return [];
}

async function createUsers(uid, firstName, lastName, email, groups=[]) {
  let role = 'MEMBER';
  if (groups.includes('ADMIN')) {
    role = 'ADMIN';
  } else if (groups.includes('LEADER')) {
    role = 'LEADER';
  }
  console.log('create user with role', role);
  // TODO: impletement aactual addition
  return {};
}

module.exports = {
  getAllUsers,
  createUsers
};