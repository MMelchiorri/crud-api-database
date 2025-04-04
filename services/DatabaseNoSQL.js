const mongoose = require('mongoose')

class NoSQLDatabase {
  constructor() {
    if (NoSQLDatabase.instance) {
      return NoSQLDatabase.instance // Return the existing instance if it already exists
    }
    NoSQLDatabase.instance = this // Save the instance to the static variable
  }

  connection = async () => {
    if (!mongoose.connection.readyState) {
      // Check if the database is not already connected
      await mongoose.connect(`${process.env.MONGO_URI}`)
      console.log('MongoDB connected')
    } else {
      console.log('MongoDB already connected')
    }
  }
}

module.exports = new NoSQLDatabase()
