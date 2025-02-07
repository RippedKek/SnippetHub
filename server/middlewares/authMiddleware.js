import jwt from 'jsonwebtoken'

export default function authMiddleware(req, res, next) {
  const token = req.headers.token
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.body.user = decoded.user
    next()
  } catch (err) {
    console.log(err)
    return res.status(401).json({ message: 'Unauthorized' })
  }
}
