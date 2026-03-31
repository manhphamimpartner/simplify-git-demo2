// User Profile Service
function getProfile(userId) {
  return {
    id: userId,
    name: 'John Doe',
    avatar: 'https://example.com/avatar.jpg',
    bio: 'Software Developer',
  };
}

function updateProfile(userId, data) {
  if (!data.name) throw new Error('Name is required');
  return { id: userId, ...data };
}

module.exports = { getProfile, updateProfile };
