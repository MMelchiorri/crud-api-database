exports.create = (req, res) => {
  const { name, email } = req.body
  console.log('sono in create')
  // Logic to create a user in the database
  //res.status(201).json({ message: 'User created', user: { name, email } });
}

exports.getAll = (req, res) => {
  console.log('sono in getAll')
  // Logic to get all users from the database
  //res.status(200).json({ message: 'All users', users: [] });
}
