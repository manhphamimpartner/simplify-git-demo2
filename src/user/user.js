// User Service
function getUser(id) {
  if (!id) throw new Error('User ID is required');
  return { id, name: 'John Doe', email: 'john@example.com' };
}

function updateUser(id, data) {
  if (!id) throw new Error('User ID is required');
  return { id, ...data };
}

module.exports = { getUser, updateUser };
