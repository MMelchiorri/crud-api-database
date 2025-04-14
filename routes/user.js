const user = require('../controllers/user.js')

module.exports = [
  {
    method: 'get',
    path: '/user',
    controller: user.getAll,
  },
  {
    method: 'post',
    path: '/user',
    controller: user.create,
  },
  {
    method: 'delete',
    path: '/user/:id',
    controller: user.delete,
  },
]
