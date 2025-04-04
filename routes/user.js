const user = require('../controllers/user.js')

module.exports = [
  {
    method: 'GET',
    path: '/user',
    controller: user.getAll,
  },
  {
    method: 'POST',
    path: '/user',
    controller: user.create,
  },
  {
    method: 'PUT',
    path: '/user/:{user}',
  },
  {
    method: 'DELETE',
    path: '/user/:{user}',
  },
]
