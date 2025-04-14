const User = require('../schema/userSchema.js')

exports.create = async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  try {
    const user = await User.create({
      name,
      email,
      password,
    })

    res.status(201).json({
      message: 'User created',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    console.error('User creation failed:', error)
    res.status(500).json({ message: 'Error creating user' })
  }
}

exports.getAll = async (req, res) => {
  console.log('Fetching all users')
  try {
    const users = await User.find({})
    res.status(200).json({ message: 'All users', users })
  } catch (error) {
    console.log('Error fetching users:', error)
    res.status(500).json({ message: 'Error fetching users' })
  }
}
