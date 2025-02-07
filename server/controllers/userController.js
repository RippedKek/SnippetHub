class UserController {
  static async getUser(req, res) {
    res.status(200).json({
      message: 'Hello User',
    })
  }
}

export default UserController
