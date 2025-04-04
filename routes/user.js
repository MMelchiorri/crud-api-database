import user from '../controllers/user.js'

module.exports = [
  {
    method: 'GET',
    controller: user.getAll,
  },
  {
    method: 'POST',
    controller: user.create,
  },
  {
    method: 'PUT',
  },
  {
    method: 'DELETE',
  },
]
