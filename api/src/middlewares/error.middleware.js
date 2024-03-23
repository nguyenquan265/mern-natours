export const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack)

  err.statusCode = err.statusCode || 500
  err.status = err.status || 'error'

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  })
}